const mongoose = require("mongoose");
const { CUSTOMER_STATUS } = require("../../constants/customer");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    area: {
      type: String,
    },
    subArea: {
      type: String,
    },
    address: {
      doorNumber: String,
      blockNumber: String,
    },
    phoneNumber: {
      type: String,
    },
    stbNumber: {
      type: String,
    },
    planAmount: {
      type: Number,
    },
    status: {
      type: String,
      default: CUSTOMER_STATUS.ACTIVE,
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
