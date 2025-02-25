const EntityController = require("../../lib/EntityController");
const InvoiceService = require("./invoice.service");

class InvoiceController extends EntityController {
  constructor() {
    super("invoice");
  }

  loadDefaultRoutes() {
    this.router.post(
      `/${this.entityName}/generate/current-month`,
      this.asyncHandler(this.generateInvoicesForCurrentMonth.bind(this))
    );
  }

  async generateInvoicesForCurrentMonth(req, res, next) {
    await InvoiceService.generateInvoicesForCurrentMonth({});
    res.json({
      message: "Invoice generated successfully for current month",
    });
  }

  // async fetchAllEntities(req, res) {
  //   const data = await InvoiceService.fetchAllEntities(req, {});
  //   res.json({
  //     data,
  //   });
  // }

  // async fetchEntityById(req, res) {
  //   const data = await InvoiceService.fetchEntityById(req, {});
  //   res.json({
  //     data,
  //   });
  // }

  // async createEntity(req, res) {
  //   const data = await InvoiceService.createEntity(req, { body: req.body });
  //   res.json({
  //     data,
  //   });
  // }

  // async updateEntityById(req, res) {
  //   const data = await InvoiceService.updateEntityById(req, { body: req.body });
  //   res.json({
  //     data,
  //   });
  // }

  // async deleteEntityById(req, res) {
  //   const data = await InvoiceService.deleteEntityById(req, {});
  //   res.json({
  //     data,
  //   });
  // }
}

module.exports = InvoiceController;
