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
        res.status(401).json(authError);
      }
      jwt.verify("token", process.env.TOKEN_SECRET, (err, decodedPayload) => {
        req.token = decodedPayload;
        if (err) {
          res.status(401).json(authError);
        }
        next;
      });
    } catch (err) {
      console.log("restricted", err);
      next(err);
    }
  };
}
