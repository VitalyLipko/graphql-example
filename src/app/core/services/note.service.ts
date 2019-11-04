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

    return this.apollo.query<{ notes: Note[]; }>({ query })
      .pipe(map(res => res.data.notes));
  }
}
