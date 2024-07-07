const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = async function verifyJWT(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  if (!authorizationHeader) {
    return res.status(403).json({
      message: "Authorization header with Bearer {TOKEN} is required.",
    });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = {
      id: decodedToken.userId,
      userType: decodedToken.userType,
    };
  } catch (err) {
    return res.status(401).send({
      message: "Invalid authorizationToken",
    });
  }
  return next();
};
