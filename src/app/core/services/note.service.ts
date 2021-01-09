import {ApolloError} from '@apollo/client/core';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {
  GetNotesGQL,
  GetNoteGQL,
  EditNoteGQL,
  CreateNoteGQL,
  DeleteNoteGQL,
  CreateNoteMutationVariables,
  GetNoteQueryVariables,
  EditNoteMutationVariables,
  DeleteNoteMutationVariables,
  Note,
} from './generated/graphql-example';


function errorHandler<T>() {
  return (src: Observable<T>) =>
    src.pipe(
      catchError((error: ApolloError) => {
        const messages = error.graphQLErrors
          ? error.graphQLErrors.map((err) => err.message)
          : [error.networkError.message];

        return throwError({ messages });
      }),
    );
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(
    private getNotesGQL: GetNotesGQL,
    private getNoteGQL: GetNoteGQL,
    private editNoteGQL: EditNoteGQL,
    private createNoteGQL: CreateNoteGQL,
    private deleteNoteGQL: DeleteNoteGQL,
  ) {}

  getNotes(): Observable<Note[]> {
    return this.getNotesGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.notes));
  }

  getNote(variables: GetNoteQueryVariables): Observable<Note> {
    return this.getNoteGQL.fetch(variables).pipe(
      errorHandler(),
      map((res) => res.data.note),
    );
  }

  createNote(variables: CreateNoteMutationVariables): Observable<Note> {
    return this.createNoteGQL
      .mutate(variables, {
        refetchQueries: [{ query: this.getNotesGQL.document }],
      })
      .pipe(
        errorHandler(),
        map((res) => res.data.createNote),
      );
  }

  editNote(variables: EditNoteMutationVariables): Observable<Note> {
    return this.editNoteGQL
      .mutate(variables, {
        refetchQueries: [{ query: this.getNotesGQL.document }],
      })
      .pipe(
        errorHandler(),
        map((res) => res.data.editNote),
      );
  }

  deleteNote(variables: DeleteNoteMutationVariables): Observable<boolean> {
    return this.deleteNoteGQL
      .mutate(variables, {
        refetchQueries: [{ query: this.getNotesGQL.document }],
      })
      .pipe(
        errorHandler(),
        map((res) => res.data.deleteNote),
      );
  }
}
