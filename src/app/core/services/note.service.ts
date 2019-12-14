import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  DeletedNote
} from './generated/graphql-example';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private getNotesGQL: GetNotesGQL,
    private getNoteGQL: GetNoteGQL,
    private editNoteGQL: EditNoteGQL,
    private createNoteGQL: CreateNoteGQL,
    private deleteNoteGQL: DeleteNoteGQL
  ) { }

  getNotes(): Observable<Note[]> {
    return this.getNotesGQL.watch().valueChanges
      .pipe(
        map(res => res.data.notes)
      );
  }

  getNote(variables: GetNoteQueryVariables): Observable<Note> {
    return this.getNoteGQL.fetch(variables)
      .pipe(
        map(res => res.data.note)
      );
  }

  createNote(variables: CreateNoteMutationVariables): Observable<Note> {
    return this.createNoteGQL.mutate(
      variables,
      { refetchQueries: [{ query: this.getNotesGQL.document }] }
    )
      .pipe(
        map(res => res.data.createNote)
      );
  }

  editNote(variables: EditNoteMutationVariables): Observable<Note> {
    return this.editNoteGQL.mutate(
      variables,
      { refetchQueries: [{ query: this.getNotesGQL.document }] }
    )
      .pipe(
        map(res => res.data.editNote)
      );
  }

  deleteNote(variables: DeleteNoteMutationVariables): Observable<DeletedNote> {
    return this.deleteNoteGQL.mutate(
      variables,
      { refetchQueries: [{ query: this.getNotesGQL.document }] }
    )
      .pipe(
        map(res => res.data.deleteNote)
      );
  }
}
