const { User } = require("../models");
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

module.exports = { getUserbyUsername, checkPassword };
