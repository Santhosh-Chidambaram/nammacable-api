const InvoiceModel = require("./invoice.model");

class InvoiceService {
  static async fetchAllEntities(reqContext, {}) {
    return InvoiceModel.find({});
  }

  static async fetchEntityById(reqContext, {}) {
    return InvoiceModel.findById({});
  }

  static async createEntity(reqContext, { body }) {
    return InvoiceModel.create(body);
  }

  static async updateEntityById(reqContext, {}) {
    return InvoiceModel.updateOne({});
  }

  static async deleteEntityById(reqContext, {}) {
    return InvoiceModel.deleteOne({});
  }
}

module.exports = InvoiceService;
