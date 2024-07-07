const CustomerModel = require("./customer.model");

class CustomerService {
  static async fetchAllEntities({ reqParams, reqQuery, reqBody }) {
    return CustomerModel.find({});
  }

  static async fetchEntityById({ reqParams, reqQuery, reqBody }) {
    return CustomerModel.findById(reqParams.id);
  }

  static async createEntity({ reqParams, reqQuery, reqBody }) {
    return CustomerModel.create(reqBody);
  }

  static async updateEntityById({ reqParams, reqQuery, reqBody }) {
    return CustomerModel.findByIdAndUpdate(reqParams.id, reqBody, {
      new: true,
    });
  }

  static async deleteEntityById({ reqParams, reqQuery, reqBody }) {
    return CustomerModel.findByIdAndUpdate(
      reqParams.id,
      {
        deleted: true,
      },
      {
        new: true,
      }
    );
  }
}

module.exports = CustomerService;
