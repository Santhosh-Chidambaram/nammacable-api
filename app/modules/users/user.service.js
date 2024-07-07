const jwt = require("jsonwebtoken");
const UserModel = require("./user.model");

class UserService {
  static generateAuthToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  static async fetchAllEntities({ reqParams, reqQuery, reqBody }) {
    return UserModel.find({});
  }

  static async fetchEntityById({ reqParams, reqQuery, reqBody }) {
    return UserModel.findById({});
  }

  static async createEntity({ reqParams, reqQuery, reqBody }) {
    return UserModel.create(reqBody);
  }

  static async updateEntityById({ reqParams, reqQuery, reqBody }) {
    return UserModel.updateOne({});
  }

  static async deleteEntityById({ reqParams, reqQuery, reqBody }) {
    return UserModel.deleteOne({});
  }

  static async authenticateUser({ reqParams, reqQuery, reqBody }) {
    const { username, password } = reqBody;

    let user = await UserModel.findOne(
      {
        username,
      },
      {
        username: 1,
        userType: 1,
      }
    );

    if (!user) throw new Error("User does not exists");

    if (!user.validatePassword(password)) throw new Error("Invalid password");

    user = user.toObject();

    user.token = this.generateAuthToken({
      userId: user._id,
      userType: user.userType,
    });

    return user;
  }
}

module.exports = UserService;
