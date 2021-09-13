const sequelize = require("../config/connection");
const User = require("../models/User");

describe("User", () => {
  it("should be defined", async () => {
    await sequelize.sync({ force: true });
    const user = await User.create({
      username: "test",
      password: "tests",
      email: "hello@somewhere.com",
    });

    // CREATE

    expect(User).toBeDefined();
    expect(user).toBeInstanceOf(User);
    expect(user.username).toBe("test");
    // Expect password to be hashed
    expect(user.password).not.toBe("tests");
    expect(user.email).toBe("hello@somewhere.com");

    // Update

    await user.update({
      email: "goodbye@elsewhere.com",
    });

    expect(user.email).toBe("goodbye@elsewhere.com");

    // Delete
    const id = user.id;
    await user.destroy();
    const deletion = await User.findByPk(id);
    // console.log(deletion);

    expect(deletion).toBe(null);
  });
});
