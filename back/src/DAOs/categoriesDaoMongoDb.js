const ContainerMongoDB = require("../container/containerMongoDB");
const categoryModel = require("../models/categories.model");

class CategoriesDaoMongoDB extends ContainerMongoDB {
  constructor() {
    super(categoryModel);
  }
}

module.exports = CategoriesDaoMongoDB;
