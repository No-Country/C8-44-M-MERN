const ContenedorMongoDB = require("../container/contenedorMongoDB");
const categoryModel = require("../models/categories.model");

class CategoriesDaoMongoDB extends ContenedorMongoDB {
  constructor() {
    super(categoryModel);
  }
}

module.exports = CategoriesDaoMongoDB;
