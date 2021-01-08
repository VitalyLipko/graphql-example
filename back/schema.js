const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Note {
    id: ID!
    title: String
    text: String
  }

  type Query {
    notes: [Note!]
    note(id: ID!): Note
  }

  type Mutation {
    createNote(note: CreateNoteInput!): Note!,
    editNote(note: EditNoteInput!): Note!,
    deleteNote(id: ID!): Boolean
  }

  input CreateNoteInput {
    title: String
    text: String
  }

  input EditNoteInput {
    id: ID!
    title: String
    text: String
  }
`;