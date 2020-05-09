
module.exports = {
    Query: {
        async list_product(_, { filterInput: filter }, { repos }) {
            try {
                return await repos.Product.getByFilters(filter);
            } catch (error) {
                return error;
            }
        },
    },
    Mutation: {
        async create_product(_, { productCreateInput: createInput }, { repos }) {
            try {
                return await repos.Product.create({
                    name: createInput.name,
                    color: createInput.color,
                    size: createInput.size,
                    price: createInput.price,
                    brandId: createInput.brand_id,
                    categoryId: createInput.category_id,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
            } catch(error) {
                return error;
            }
        },
        async create_brand(_, { brandCreateInput: filter }, { repos }) {
            try {
                return await repos.Brand.create({
                    name: filter.name,
                    code: filter.code,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
            } catch(error) {
                return error;
            }
        },
        async create_category(_, { categoryCreateInput: filter }, { repos }) {
            try {
                return await repos.Category.create({
                    name: filter.name,
                    type: filter.type,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
            } catch(error) {
                return error;
            }
        }
    }
}
