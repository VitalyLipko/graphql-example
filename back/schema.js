const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Note {
    id: ID!
    title: String
    text: String
  }

  type DeletedNote {
    id: ID!
  }

  type Query {
    notes: [Note!]
    note(id: ID!): Note
  }

  type Mutation {
    createNote(title: String, text: String): Note!,
    editNote(id: ID!, title: String, text: String): Note,
    deleteNote(id: ID!): DeletedNote
  }
`;