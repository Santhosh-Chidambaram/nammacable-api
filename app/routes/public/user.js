const router = require("express").Router();
const userController = new (require("../../modules/users/user.controller"))();

router.use(userController.router);

module.exports = router;
