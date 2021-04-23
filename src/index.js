const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const colors = require('colors');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

// Load env variables
require('dotenv').config();
// Connect database
require('./config/database')();

const port = process.env.PORT || 4000;

const app = express();
// Apollo Server setup
const server = new ApolloServer({
  typeDefs: require('./schema'),
  resolvers: {
    Query,
    Mutation,
  },
});

// Apply the Apollo GraphQL middleware
server.applyMiddleware({ app });

app.listen({ port }, () =>
  console.log(
    `GraphQL server running on http://localhost:${port}${server.graphqlPath}`
      .yellow
  )
);
