const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// GET /api/posts (gets all posts)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET /api/posts/:id (gets a single user)
router.get("/:id", async (req, res) => {
  try {
    res.status(200).send(
      await Post.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Comment,
            // attributes: ["id", "content", "createdAt"],
          },
        ],
      })
    );
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
