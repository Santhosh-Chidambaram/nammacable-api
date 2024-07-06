const router = require("express").Router();

/*
|-----------------------------------------------|
| Authenticated/Protected Routes                |
|-----------------------------------------------|
*/
router.use("/api/private", require("./authenticated"));

/*
|-----------------------------------------------|
| Public Routes                                 |
|-----------------------------------------------|
*/
router.use("/api/public", require("./public"));

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs application." });
});

module.exports = router;
