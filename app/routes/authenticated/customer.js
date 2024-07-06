const router = require("express").Router();
const customerController =
  new (require("../../modules/customers/customer.controller"))();

router.use(customerController.router);

module.exports = router;
