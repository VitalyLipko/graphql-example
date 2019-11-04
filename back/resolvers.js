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
            notes.push({ ...args, id: uuidv4() });

            return notes;
        },
        editNote: (parent, args) => {
            const { id, title, text } = args;
            let editableNote = notes.find(note => note.id === id);

            if (title) {
                editableNote.title = title;
            }
            if (text) {
                editableNote.text = text;
            }

            return notes;
        },
        deleteNote: (parents, args) => {
            const index = notes.findIndex(note => note.id === args.id);
            notes.splice(index, 1);

            return notes;
        }
    }
};

exports.resolvers = resolvers;