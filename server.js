const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const repos = require('./db/repos');
const app = require('./index');
const crypto = require('./helpers/crypto');
const queue = require('./db/redis/queue');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => {
        const headers = req.headers.authorization;
        let admin = null;
        if (headers) {
            const token = headers.replace('Bearer ', '');
            admin = crypto.getAdminFromToken(token);
        }

        return { repos, admin, queue }
    }
})

server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 8000 }, () => {
    console.log(`🚀 GraphQL Server ready at ${server.graphqlPath}`)
});
