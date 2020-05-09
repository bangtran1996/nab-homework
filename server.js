const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const repos = require('./db/repos');
const app = require('./index');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { repos }
})

server.applyMiddleware({ app })

app.listen({port: process.env.PORT || 8000}, () => {
    console.log(`🚀 GraphQL Server ready at ${server.graphqlPath}`)
});
