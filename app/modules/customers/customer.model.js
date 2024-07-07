const mongoose = require("mongoose");
const { CUSTOMER_STATUS } = require("../../constants/customer");

const schema = new mongoose.Schema(
  {
    lcoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    address: {
      doorNumber: String,
      blockNumber: String,
      street: String,
    },
    phoneNumber: {
      type: String,
    },
    stbNumber: {
      type: String,
      required: true,
    },
    planAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: CUSTOMER_STATUS.ACTIVE,
      required: true,
      enum: Object.values(CUSTOMER_STATUS),
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

schema.index({ name: 1 });
schema.index({ stbNumber: 1 });
schema.index({ area: 1 });
schema.index({ status: 1 });

module.exports = mongoose.model("customer", schema);
