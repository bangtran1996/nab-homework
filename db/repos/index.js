const models = require('../models')
const ProductRepo = require('./product');
const BrandRepo = require('./brand');
const CategoryRepo = require('./category');

module.exports = {
    Product: ProductRepo(models.product),
    Brand: BrandRepo(models.brand),
    Category: CategoryRepo(models.category),
}
