const CustomerModel = require("./customer.model");

class CustomerService {
  static async fetchAllEntities(reqContext, {}) {
    return CustomerModel.find({});
  }

  static async fetchEntityById(reqContext, {}) {
    return CustomerModel.findById({});
  }

  static async createEntity(reqContext, { body }) {
    return CustomerModel.create(body);
  }

  static async updateEntityById(reqContext, {}) {
    return CustomerModel.updateOne({});
  }

  static async deleteEntityById(reqContext, {}) {
    return CustomerModel.deleteOne({});
  }
}

module.exports = CustomerService;
