const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("../views/home.hbs", {
    loggedIn: true,
  });
});

module.exports = router;
