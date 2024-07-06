const jwt = require("jsonwebtoken");
const UserModel = require("./user.model");

class UserService {
  static generateAuthToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  static async fetchAllEntities(reqContext, {}) {
    return UserModel.find({});
  }

  static async fetchEntityById(reqContext, {}) {
    return UserModel.findById({});
  }

  static async createEntity(reqContext, { body }) {
    return UserModel.create(body);
  }

  static async updateEntityById(reqContext, {}) {
    return UserModel.updateOne({});
  }

  static async deleteEntityById(reqContext, {}) {
    return UserModel.deleteOne({});
  }

  static async authenticate(reqContext, { body }) {
    const { username, password } = body;

    let user = await UserModel.findOne({
      username,
    });

    if (!user) throw new Error("User does not exists");

    if (!user.validatePassword(password)) throw new Error("Invalid password");

    user = user.toObject();

    user.token = this.generateAuthToken({
      userId: user._id,
    });

    return user;
  }
}

module.exports = UserService;
