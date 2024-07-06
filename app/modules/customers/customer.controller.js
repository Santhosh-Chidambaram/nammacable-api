const EntityController = require("../../lib/EntityController");
const CustomerService = require("./customer.service");

class CustomerController extends EntityController {
  constructor() {
    super("customer");
    this.loadRoutes();
  }

  loadRoutes() {}

  // async fetchAllEntities(req, res) {
  //   const data = await CustomerService.fetchAllEntities(req, {});
  //   res.json({
  //     data,
  //   });
  // }

  // async fetchEntityById(req, res) {
  //   const data = await CustomerService.fetchEntityById(req, {});
  //   res.json({
  //     data,
  //   });
  // }

  // async createEntity(req, res) {
  //   const data = await CustomerService.createEntity(req, { body: req.body });
  //   res.json({
  //     data,
  //   });
  // }

  // async updateEntityById(req, res) {
  //   const data = await CustomerService.updateEntityById(req, {
  //     body: req.body,
  //   });
  //   res.json({
  //     data,
  //   });
  // }

  // async deleteEntityById(req, res) {
  //   const data = await CustomerService.deleteEntityById(req, {});
  //   res.json({
  //     data,
  //   });
  // }
}

module.exports = CustomerController;
