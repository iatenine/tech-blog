const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("../views/home.hbs");
});

module.exports = router;
