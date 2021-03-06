const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");

router.post("/register", async (req, res, next) => {
  const authError = {
    message: "Invalid Credentials"
  };
  try {
    const credentials = req.body;
    const rounds = process.env.HASH_ROUNDS || 12;

    // hash password
    const hash = bcrypt.hashSync(credentials.password, rounds);
    // reassigned the password to hash
    credentials.password = hash;
    const user = await Users.add(credentials);
    if (!user) {
      return res.status(401).json({ message: authError });
    }
    res.status(201).json(user);
  } catch (err) {
    console.log("/register", err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const authError = {
    message: "Invalid Credentials"
  };
  try {
    const user = await Users.findBy({ username: req.body.username });

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.status(201).json({ message: `welcome ${user.username}` });
    } else {
      res.status(401).json(authError);
    }
  } catch (err) {
    console.log("/login", err);
    next(err);
  }
});
module.exports = router;
