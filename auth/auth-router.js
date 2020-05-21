const router = require("express").Router();

router.post("/register", async (req, res, next) => {
  try {
  } catch (err) {
    console.log("/register", err);
    next(err);
  }
});
module.exports = router;
