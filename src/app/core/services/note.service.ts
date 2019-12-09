import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Note } from '../models/note.model';
import { GetNotesGQL, GetNoteGQL, EditNoteGQL, CreateNoteGQL, DeleteNoteGQL } from './generated/graphql-example';

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
    return this.getNotesGQL.fetch()
      .pipe(
        map(res => res.data.notes as Note[])
      );
  }

  getNote(variables: { id: string }): Observable<Note> {
    return this.getNoteGQL.fetch(variables)
      .pipe(
        map(res => res.data.note as Note)
      );
  }

  createNote(variables: { title?: string, text?: string }): Observable<Note[]> {
    return this.createNoteGQL.mutate(variables)
      .pipe(
        map(res => res.data.createNote as Note[])
      );
  }

  editNote(variables: { id: string, title?: string, text?: string }): Observable<Note[]> {
    return this.editNoteGQL.mutate(variables)
      .pipe(
        map(res => res.data.editNote as Note[])
      );
  }

  deleteNote(variables: { id: string }): Observable<Note[]> {
    return this.deleteNoteGQL.mutate(variables)
      .pipe(
        map(res => res.data.deleteNote as Note[])
      );
  }
}
