const models = require('../models')
const ProductRepo = require('./product');
const BrandRepo = require('./brand');
const CategoryRepo = require('./category');
const ActivityRepo = require('./activity');
const AdminRepo = require('./admin');

module.exports = {
    Product: ProductRepo(models.product),
    Brand: BrandRepo(models.brand),
    Activity: ActivityRepo(models.activity),
    Category: CategoryRepo(models.category),
    Admin: AdminRepo(models.admin)
}
