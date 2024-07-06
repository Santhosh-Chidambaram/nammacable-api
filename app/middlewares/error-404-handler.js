module.exports = function error404Handler(req, res, next) {
  res.status(404).json({
    message: "Requested endpoint does not exists!",
  });
};
