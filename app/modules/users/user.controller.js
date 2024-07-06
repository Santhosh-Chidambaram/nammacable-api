const EntityController = require("../../lib/EntityController");
const UserService = require("./user.service");

class UserController extends EntityController {
  constructor() {
    super("user");
  }
}

module.exports = UserController;
