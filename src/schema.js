const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    user(googleId: ID!): User!
    channel(_id: ID!): Channel!
    message(_id: ID!): Message!
  }

  type Mutation {
    createUser(googleId: ID!): User!
    createChannel(data: createChannelInput!): Channel!
    createMessage(data: createMessageInput!): Message!
    deleteChannel(_id: ID!): Channel!
    deleteMessage(_id: ID!): Message!
  }

  input createChannelInput {
    name: String!
    public: Boolean
    admin: ID!
  }

  input createMessageInput {
    content: String!
    author: ID!
    channel: ID!
  }

  type User {
    googleId: ID!
    _id: ID!
    username: String
    channels: [Channel!]
  }

  type Channel {
    _id: ID!
    name: String!
    public: Boolean!
    createdAt: String!
    members: [User!]!
    messages: [Message!]
    admin: User!
  }

  type Message {
    _id: ID!
    content: String!
    createdAt: String!
    author: User!
    channel: Channel!
  }
`;
