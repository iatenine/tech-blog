const router = require("express").Router();
const api = require("./api");

router.use("/api", api);

router.get("/", (req, res) => {
  res.render("../views/home.hbs", {
    loggedIn: true,
  });
});

// Login
router.post("/login", async (req, res) => {
  try {
    const result = await getUserbyUsername(req.body.username);
    const success = checkPassword(req.body.password, result.password);
    if (!result || !success) res.status(403).end();
    // Update session store
    else
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = result.id;
        res.status(200).json(result);
      });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

module.exports = router;
