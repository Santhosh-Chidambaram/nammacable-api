const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { USER_TYPES } = require("../../constants/user");
const SALT_WORK_FACTOR = 10;

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    userType: {
      type: String,
      enum: Object.values(USER_TYPES),
      default: USER_TYPES.GUEST_USER,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

schema.pre("save", async function save(next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

schema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model("user", schema);
