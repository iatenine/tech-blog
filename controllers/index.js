const router = require("express").Router();
const { getUserbyUsername, checkPassword } = require("../utils/helpers");
const api = require("./api");

router.use("/api", api);

router.get("/", (req, res) => {
  const loggedIn = req.session.loggedIn ?? false;
  console.log(loggedIn);
  res.render("../views/home.hbs", {
    loggedIn,
  });
});

// Login
router.post("/login", async (req, res) => {
  try {
    const result = await getUserbyUsername(req.body.username);
    if (!result) res.status(403).end();
    const success = checkPassword(req.body.password, result.password);
    if (!success) res.status(403).end();
    // Update session store
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

// Logoout
router.get("/logout", (req, res) => {
  req.session.loggedIn = false;
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
