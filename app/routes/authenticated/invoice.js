const router = require("express").Router();
const invoiceController =
  new (require("../../modules/invoices/invoice.controller"))();

router.use(invoiceController.router);

module.exports = router;
