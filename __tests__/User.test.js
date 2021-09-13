const sequelize = require("../config/connection");
const { User, Post } = require("../models");

describe("User", () => {
  it("should be able to handle CRUD", async () => {
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

    expect(deletion).toBe(null);
  });
});

describe("Comments", () => {
  it("should be able to handle CRUD", async () => {
    await sequelize.sync({ force: true });
    const user = await User.create({
      username: "differentName",
      password: "tests",
      email: "goodbye@yes.com",
    });
    const id = user.id;
    expect(user).toBeDefined();

    // CREATE POST
    const title = "test title";
    const body = "test body";

    const post = await Post.create({
      title: title,
      content: body,
      author_id: id,
    });

    expect(post).toBeDefined();
    expect(post).toBeInstanceOf(Post);
    expect(post.title).toBe(title);
    expect(post.content).toBe(body);
    expect(post.author_id).toBe(id);

    // Get author of post
    const postWithData = await Post.findOne({
      where: {
        title: title,
      },
      include: [
        {
          model: User,
        },
      ],
    });
    const author = postWithData.dataValues.user.dataValues;
    expect(author.username).toBe("differentName");

    // Update post
    const newTitle = "new title";
    const newBody = "new body";
    await post.update({
      title: newTitle,
      content: newBody,
    });

    expect(post.title).toBe(newTitle);
    expect(post.content).toBe(newBody);

    // Delet user
    await user.destroy();
    const deletion = await User.findByPk(id);

    expect(deletion).toBe(null);
  });
});
