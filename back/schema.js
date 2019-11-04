const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Note {
    id: String!
    title: String
    text: String
  }

  type Query {
    notes: [Note!]
    note(id: String!): Note
  }

  type Mutation {
    createNote(title: String, text: String): [Note!],
    editNote(title: String, text: String, id: String!): [Note!],
    deleteNote(id: String!): [Note!]
  }
`;