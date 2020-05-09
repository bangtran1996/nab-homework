const { gql } = require('apollo-server')

const typeDefs = gql`
    input ProductFilterInput {
        page: Int
        size: Int
        keyword: String
        color: String
        product_size: String
    }

    type Products {
        id: Int!
        name: String!
    }

    type Query {
        list_product(filterInput: ProductFilterInput): [Products]
    }
`

module.exports = typeDefs
