const jwt = require("jsonwebtoken");
module.exports = {
  restricted
};
function restricted() {
  return async (req, res, next) => {
    const authError = {
      message: "Invalid Credentials"
    };
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ token: authError });
      }

      jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedPayload) => {
        req.token = decodedPayload;
        // if (err) {
        //   console.log("err", err);
        //   return res.status(401).json({ token: authError });
        // }
        next();
      });
    } catch (err) {
      console.log("restricted", err);
      next(err);
    }
  };
}
