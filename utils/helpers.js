const { User, Post, Comment } = require("../models");
const bcrypt = require("bcrypt");

async function getUserbyUsername(query) {
  try {
    const result = await User.findOne({
      where: { username: query },
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function checkPassword(password, hashword) {
  return bcrypt.compareSync(password, hashword);
}

async function getAllPosts() {
  return await Post.findAll({
    include: [
      {
        model: User,
        attributes: ["username", "id"],
      },
      {
        model: Comment,
        attributes: ["id", "content", "createdAt"],
      },
    ],
  });
}

module.exports = { getUserbyUsername, checkPassword, getAllPosts };
