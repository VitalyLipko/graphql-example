let { notes } = require('./db');
const uuidv4 = require('uuid/v4');
const { ApolloError } = require('apollo-server');

const noteNotFound = () => {
  throw new ApolloError(`Заметка не найдена!`);
};
const resolvers = {
  Query: {
    notes: () => notes,
    note(parent, args) {
      const note = notes.find((note) => note.id === args.id);
      if (!note) {
        noteNotFound();
      }

      return note;
    },
  },
  Mutation: {
    createNote: (parent, args) => {
      const note = { ...args.note, id: uuidv4() };
      notes.push(note);

      return note;
    },
    editNote: (parent, args) => {
      const { id, title, text } = args.note;
      let note = notes.find((note) => note.id === id);
      if (!note) {
        noteNotFound();
      } else {
        if (title) {
          note.title = title;
        }
        if (text) {
          note.text = text;
        }
      }

      return note;
    },
    deleteNote: (parents, args) => {
      notes = notes.filter((note) => note.id !== args.id);
      return true;
    },
  },
};

exports.resolvers = resolvers;
