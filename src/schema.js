const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    hello: String!
  }

  type User {
    id: ID!
    username: String
    channels: [Channel!]!
  }

  type Channel {
    id: ID!
    name: String!
    public: Boolean!
    reatedAt: String!
    members: [User!]!
    messages: [Message!]!
    admin: User!
  }

  type Message {
    id: ID!
    text: String!
    createdAt: String!
    author: User!
    channel: Channel!
  }
`;
