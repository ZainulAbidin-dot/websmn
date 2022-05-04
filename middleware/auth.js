const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) res.status(401).json({ msg: "No Token ..." });

  jwt.verify(token, config.get("jwtSecret"), (error, decoded) => {
    if (error) {
      return res.sendStatus(401);
    } else {
      req.user = decoded.user;
      next();
    }
  });
};
