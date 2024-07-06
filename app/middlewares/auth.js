const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = function verifyJWT(req, res, next) {
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    return res.status(403).json({
      message: "Authorization header with Bearer {TOKEN} is required.",
    });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.userId;
  } catch (err) {
    return res.status(401).send({
      message: "Invalid authorizationToken",
    });
  }
  return next();
};
