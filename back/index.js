const { ApolloServer } = require('apollo-server');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    debug: false
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});