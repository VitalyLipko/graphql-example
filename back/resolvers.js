const { notes } = require('./db');
const uuidv4 = require('uuid/v4');

const resolvers = {
    Query: {
        notes: () => notes,
        note(parent, args) {
            return notes.find(note => note.id === args.id);
        }
    },
    Mutation: {
        createNote: (parent, args) => {
            const note = { ...args, id: uuidv4() };
            notes.push(note);

            return note;
        },
        editNote: (parent, args) => {
            const { id, title, text } = args;
            let note = notes.find(note => note.id === id);

            if (title) {
                note.title = title;
            }
            if (text) {
                note.text = text;
            }

            return note;
        },
        deleteNote: (parents, args) => {
            const index = notes.findIndex(note => note.id === args.id);
            const note = notes.splice(index, 1)[0];

            return note;
        }
    }
};

exports.resolvers = resolvers;