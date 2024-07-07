const checkUserType = (requiredUserType) => {
  return (req, res, next) => {
    const user = req.user;

    if (user && user?.userType === requiredUserType) {
      return next();
    } else {
      return res
        .status(403)
        .json({ message: "Forbidden: Insufficient permissions" });
    }
  };
};

module.exports = checkUserType;
