const mongoose = require("mongoose");
const { INVOICE_STATUS } = require("../../constants/invoice");

const schema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: String,
    },
    invoiceDate: {
      type: Date,
    },
    invoiceAmount: {
      type: Number,
    },
    dueDate: {
      type: Date,
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: INVOICE_STATUS.UNPAID,
      enum: Object.values(INVOICE_STATUS),
    },
    billingMonth: {
      type: String,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
    },
    lcoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("invoice", schema);
