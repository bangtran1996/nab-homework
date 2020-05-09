const models = require('../models')
const ProductRepo = require('./product');
const BrandRepo = require('./brand');
const CategoryRepo = require('./category');
const ActivityRepo = require('./activity');

module.exports = {
    Product: ProductRepo(models.product),
    Brand: BrandRepo(models.brand),
    Activity: ActivityRepo(models.activity),
    Category: CategoryRepo(models.category),
}
