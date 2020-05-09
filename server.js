const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const models = require('./db/models/index');
const app = require('./index');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
})

server.applyMiddleware({ app })

app.listen({port: process.env.PORT || 8000}, () => {
    console.log(`🚀 GraphQL Server ready at ${server.graphqlPath}`)
});
