const { SYSTEM_USER } = require("./constants");
const { USER_TYPES } = require("./constants/user");
const userModel = require("./modules/users/user.model");

const loadSystemUser = async () => {
  const systemUser = await userModel.findOne({ username: SYSTEM_USER });

  if (!systemUser) {
    await userModel.create({
      username: SYSTEM_USER,
      password: process.env.SYSTEM_USER_PWD,
      userType: USER_TYPES.ADMIN,
    });
  }
};

module.exports = {
  loadSystemUser,
};
