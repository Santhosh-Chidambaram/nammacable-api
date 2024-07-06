const express = require("express");
const cors = require("cors");
const db = require("./db");
const rateLimiter = require("./middlewares/rate-limiter");
const error404Handler = require("./middlewares/error-404-handler");

/*
|-----------------------------------------------|
| Initialize Middlewares                        |
|-----------------------------------------------|
*/
const initializeMiddlewares = (app) => {
  /**
   * Loads all default middlewares
   */
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));
  app.use(cors());

  /**
   * Use RateLimiter Middleware
   */
  app.use(rateLimiter);

  /**
   * Use Error404 Middleware
   */
  app.use(error404Handler);
};

/*
|-----------------------------------------------|
| Initialize App Routes                         |
|-----------------------------------------------|
*/
const initializeAppRoutes = (app) => {
  app.use(require("./routes"));
};

module.exports.bootstrap = async () => {
  const app = express();
  /*
  |-----------------------------------------------|
  | Connects to DB                             |
  |-----------------------------------------------|
 */
  await db.init();

  /*
  |-----------------------------------------------|
  | Initialize Middlewares                        |
  |-----------------------------------------------|
  */
  initializeMiddlewares(app);

  /*
  |-----------------------------------------------|
  | Initialize App Routes                         |
  |-----------------------------------------------|
  */
  initializeAppRoutes(app);

  // set port, listen for requests
  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

  return app;
};
