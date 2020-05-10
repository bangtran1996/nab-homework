
module.exports = {
    Query: {
        async get_product(_, { productId }, { repos }) {
            try {
                const product = await repos.Product.getByID(productId);
                return product;
            } catch (error) {
                return error;
            } finally {

            }
        },
        async list_product(_, { filterInput: filter }, { repos }) {
            try {
                const productsList = await repos.Product.getByFilters(filter);
                return productsList;
            } catch (error) {
                return error;
            } finally {

            }
        },
    },
    Mutation: {
        async create_product(_, { productCreateInput: createInput }, { repos, user }) {
            if (!user) {
                return new Error('Need login, authentication required')
            }
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
        async create_brand(_, { brandCreateInput: input }, { repos, user }) {
            if (!user) {
                return new Error('Need login, authentication required')
            }
            try {
                return await repos.Brand.create({
                    name: input.name,
                    code: input.code,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
            } catch(error) {
                return error;
            }
        },
        async create_category(_, { categoryCreateInput: input }, { repos, user }) {
            if (!user) {
                return new Error('Need login, authentication required')
            }
            try {
                return await repos.Category.create({
                    name: input.name,
                    type: input.type,
                    createdAt: Date.now(),
                    updatedAt: Date.now()
                });
            } catch(error) {
                return error;
            }
        }
    }
}
