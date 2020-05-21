const router = require("express").Router();
const Users = require("./users-model");
const { restricted } = require("../middleware/restricted");
router.get("/", restricted(), async (req, res, next) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    console.log("/user get users", err);
    next(err);
  }
});

module.exports = router;
