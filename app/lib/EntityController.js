const asyncHandler = require("../utils/asyncHandler");

class EntityController {
  constructor(entityName) {
    this.entityName = entityName;
    this.router = require("express").Router();
    this.asyncHandler = asyncHandler;
    this.loadDefaultRoutes();
  }

  loadDefaultRoutes() {
    this.router.get(
      `/${this.entityName}`,
      this.asyncHandler(this.fetchAllEntities.bind(this))
    );
    this.router.get(
      `/${this.entityName}/:id`,
      this.asyncHandler(this.fetchEntityById.bind(this))
    );
    this.router.post(
      `/${this.entityName}`,
      this.asyncHandler(this.createEntity.bind(this))
    );
    this.router.patch(
      `/${this.entityName}/:id`,
      this.asyncHandler(this.updateEntityById.bind(this))
    );
    this.router.delete(
      `/${this.entityName}/:id`,
      this.asyncHandler(this.deleteEntityById.bind(this))
    );
  }

  async fetchAllEntities(req, res) {
    res.json({
      data: [],
      message: `Fetched all entities sucessfully - ${this.entityName}`,
    });
  }

  async fetchEntityById(req, res) {
    res.json({
      data: {},
      message: `Fetched entity by ID sucessfully  - ${this.entityName}`,
    });
  }

  async createEntity(req, res) {
    res.json({
      data: {},
      message: `Created entity sucessfully - ${this.entityName}`,
    });
  }

  async updateEntityById(req, res) {
    res.json({
      data: {},
      message: `Updated entity by ID sucessfully - ${this.entityName}`,
    });
  }

  async deleteEntityById(req, res) {
    res.json({
      data: {},
      message: `Deleted entity by ID sucessfully - ${this.entityName}`,
    });
  }
}

module.exports = EntityController;
