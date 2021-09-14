const { getAllPosts, getUserbyUsername } = require("../utils/helpers.js");

describe("getAllPosts", () => {
  test("should return an array of posts", async () => {
    const result = await getAllPosts();
    expect(result.find((post) => post.title === "first post")).toBeDefined();
  });
});

describe("get user by username", () => {
  test("should return a user", async () => {
    const user = await getUserbyUsername("fIrStUser");
    expect(user).toBeDefined();
    expect(user.email).toBe("hello@whatever.net");
  });
});
