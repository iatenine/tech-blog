const { User } = require("../models");

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

module.exports = { getUserbyUsername };
