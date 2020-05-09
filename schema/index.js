const { gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Product {
        id: Int!
        name: String!
        color: String
        size: String
        price: Float
        brand_id: Int
        category_id: Int
        created_at: Date
        updated_at: Date
    }

    type Category {
        id: Int!
        name: String
        type: String
        created_at: Date
        updated_at: Date
    }

    type Brand {
        id: Int!
        name: String
        code: String
        created_at: Date
        updated_at: Date
    }

    input ProductFilterInput {
        page: Int!
        size: Int!
        name: String
        color: String
        product_size: String
        price: Float
        brand_ids: [Int]
        category_ids: [Int]
    }

    input ProductCreateInput {
        name: String!
        color: String!
        size: String!
        price: Float!
        brand_id: Int!
        category_id: Int!
    }

    input CategoryCreateInput {
        name: String!
        type: String!
    }

    input BrandCreateInput {
        name: String!
        code: String!
    }

    type Query {
        list_product(filterInput: ProductFilterInput): [Product]
    }

    type Mutation {
        create_product(productCreateInput: ProductCreateInput): Product
        create_brand(brandCreateInput: BrandCreateInput): Brand
        create_category(categoryCreateInput: CategoryCreateInput): Category
    }
`

module.exports = typeDefs
