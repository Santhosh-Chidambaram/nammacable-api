const EntityController = require("../../lib/EntityController");
const CustomerService = require("./customer.service");

class CustomerController extends EntityController {
  constructor() {
    super("customer");
    this.loadRoutes();
  }

  loadRoutes() {}

  async fetchAllEntities(req, res) {
    const data = await CustomerService.fetchAllEntities({
      reqParams: req.params,
      reqQuery: req.query,
    });
    res.json({
      data,
      message: "Customers fetched successfully!",
    });
  }

  async fetchEntityById(req, res) {
    const data = await CustomerService.fetchEntityById({
      reqParams: req.params,
      reqQuery: req.query,
    });
    res.json({
      data: data,
      message: "Customer fetched successfully!",
    });
  }

  async createEntity(req, res) {
    const data = await CustomerService.createEntity({ reqBody: req.body });
    res.json({
      data,
      message: "Customer created successfully!",
    });
  }

  async updateEntityById(req, res) {
    const data = await CustomerService.updateEntityById({
      reqParams: req.params,
      reqQuery: req.query,
      reqBody: req.body,
    });
    res.json({
      data,
      message: "Customer updated successfully!",
    });
  }

  async deleteEntityById(req, res) {
    const data = await CustomerService.deleteEntityById({
      reqParams: req.params,
      reqQuery: req.query,
    });
    res.json({
      data,
      message: "Customer deleted successfully!",
    });
  }
}

module.exports = CustomerController;
