const Post = require("../models/Post");
const User = require("../models/User");

User.hasMany(Post, {
  foreignKey: "author_id",
});
Post.belongsTo(User, {
  foreignKey: "author_id",
});

module.exports = { Post, User };
