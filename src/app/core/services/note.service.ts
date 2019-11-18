import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private apollo: Apollo) { }

  getNotes(): Observable<Note[]> {
    const query = gql`
      {
        notes{
          id
          title
          text
        }
      }
    `;

    return this.apollo.query<{ notes: Note[] }>({ query })
      .pipe(map(res => res.data.notes));
  }

  getNote(variables: { id: string }): Observable<Note> {
    const query = gql`
      query note($id: String!){
        note(id: $id) {
          id
          title
          text
        }
      }
    `;

    return this.apollo.query<{ note: Note }>({ query, variables })
      .pipe(map(res => res.data.note));
  }

  createNote(variables: { title?: string, text?: string }): Observable<Note[]> {
    const mutation = gql`
      mutation createNote($title: String, $text: String) {
        createNote(title: $title, text: $text){
          id
          title
          text
        }
      }
    `;

    return this.apollo.mutate<{ createNote: Note[] }>({ mutation, variables })
      .pipe(map(res => res.data.createNote));
  }

  editNote(variables: { id: string, title?: string, text?: string }): Observable<Note[]> {
    const mutation = gql`
      mutation editNote($id: String!, $title: String, $text: String) {
        editNote(id: $id, title: $title, text: $text){
          id
          title
          text
        }
      }
    `;

    return this.apollo.mutate<{ editNote: Note[] }>({ mutation, variables })
      .pipe(map(res => res.data.editNote));
  }

  deleteNote(variables: { id: string }): Observable<Note[]> {
    const mutation = gql`
      mutation deleteNote($id: String!) {
        deleteNote(id: $id){
          id
          title
          text
        }
      }
    `;

    return this.apollo.mutate<{ deleteNote: Note[] }>({ mutation, variables })
      .pipe(map(res => res.data.deleteNote));
  }
}
