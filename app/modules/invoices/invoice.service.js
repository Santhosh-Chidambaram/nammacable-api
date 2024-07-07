const CustomerModel = require("../customers/customer.model");
const InvoiceModel = require("./invoice.model");

class InvoiceService {
  static async generateInvoicesForCurrentMonth({
    reqQuery,
    reqParams,
    reqBody,
  }) {
    const BATCH_SIZE = 100;
    let invoicesToGenerate = [];
    for await (const customer of CustomerModel.find({}).cursor()) {
      invoicesToGenerate.push({
        lcoId: customer.lcoId,
        customerId: customer._id,
        invoiceNumber: "NC/LCO10355/001",
        invoiceDate: new Date(),
        invoiceAmount: customer.planAmount,
        dueDate: new Date(),
      });
      if (invoicesToGenerate.length >= BATCH_SIZE) {
        await InvoiceModel.insertMany(invoicesToGenerate);
        invoicesToGenerate = [];
      }
    }

    if (invoicesToGenerate.length > 0) {
      await InvoiceModel.insertMany(invoicesToGenerate);
      invoicesToGenerate = [];
    }
  }
}

module.exports = InvoiceService;
