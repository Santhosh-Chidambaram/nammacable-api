const router = require("express").Router();
const path = require("path");
const glob = require("glob");

const AuthMiddleware = require("../../middlewares/auth");
const basename = path.basename(module.filename);

/**
 * Adds authentication middleware for auth routes
 */
router.use(AuthMiddleware);

/**
 * Get all auth routes from files
 */
glob.sync("app/routes/authenticated/**/*.js").forEach(function (file) {
  if (basename !== file.split("/").pop()) {
    router.use(require(path.resolve(file)));
  }
});

module.exports = router;
