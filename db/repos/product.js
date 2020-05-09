const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const paginate = (query, { page, size }) => {
    const offset = page * size;
    const limit = size;
    return {
        ...query,
        offset,
        limit,
    };
};

module.exports = (product) => {
    return {
        create: async (productInput) => product.create(productInput),
        getByID: async (productId) => {
            return product.findOne({
                where: {
                    id: productId,
                }
            })
        },
        getByFilters: async (filters) => {
            let filterQuery = {
                where: {
                    deletedAt: null
                }
            }
            if (filters) {
                if (filters.name) filterQuery.where.name = {
                    [Op.like]: '%' + filters.name + '%'
                }
                if (filters.color) filterQuery.where.color = filters.color
                if (filters.product_size) filterQuery.where.size = filters.product_size

                if (filters.price) filterQuery.where.price = filters.price
                if (filters.brand_id) {
                    filterQuery.where.brand_id = {
                        $in: filters.brand_id,
                    }
                }
                if (filters.category_id) {
                    filterQuery.where.category_id = {
                        $in: filters.category_id,
                    }
                }
            }

            return product.findAll(paginate(filterQuery, filters));
        }
    }
}
