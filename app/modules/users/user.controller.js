const { USER_TYPES } = require("../../constants/user");
const EntityController = require("../../lib/EntityController");
const AuthMiddleware = require("../../middlewares/auth");
const checkUserType = require("../../middlewares/check-user-type");
const UserService = require("./user.service");

class UserController extends EntityController {
  constructor() {
    super("user");
  }

  loadDefaultRoutes() {
    this.router.get(
      `/${this.entityName}`,
      AuthMiddleware,
      checkUserType(USER_TYPES.ADMIN),
      this.asyncHandler(this.fetchAllEntities.bind(this))
    );
    this.router.get(
      `/${this.entityName}/:id`,
      AuthMiddleware,
      checkUserType(USER_TYPES.ADMIN),
      this.asyncHandler(this.fetchEntityById.bind(this))
    );
    this.router.post(
      `/${this.entityName}`,
      AuthMiddleware,
      checkUserType(USER_TYPES.ADMIN),
      this.asyncHandler(this.createEntity.bind(this))
    );
    this.router.patch(
      `/${this.entityName}/:id`,
      AuthMiddleware,
      checkUserType(USER_TYPES.ADMIN),
      this.asyncHandler(this.updateEntityById.bind(this))
    );
    this.router.delete(
      `/${this.entityName}/:id`,
      AuthMiddleware,
      checkUserType(USER_TYPES.ADMIN),
      this.asyncHandler(this.deleteEntityById.bind(this))
    );
    this.router.post(
      `/${this.entityName}/authenticate`,
      this.asyncHandler(this.authenticateUser.bind(this))
    );
  }

  async createEntity(req, res) {
    const user = await UserService.createEntity(req, { body: req.body });
    res.json({
      data: user,
      message: `Created entity sucessfully - ${this.entityName}`,
    });
  }

  async authenticateUser(req, res) {
    const user = await UserService.authenticateUser(req, { body: req.body });
    res.json({
      data: user,
      message: `User authenticated sucessfully`,
    });
  }
}

module.exports = UserController;
