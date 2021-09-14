const router = require("express").Router();
const User = require("../../models/User");

// GET /api/users (gets all users)
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET /api/users/:id (gets a single user)
router.get("/:id", async (req, res) => {
  try {
    res.status(200).send(
      await User.findOne({
        where: {
          id: req.params.id,
        },
      })
    );
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
