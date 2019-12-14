import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type DeletedNote = {
   __typename?: 'DeletedNote',
  id?: Maybe<Scalars['ID']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createNote: Note,
  editNote: Note,
  deleteNote?: Maybe<DeletedNote>,
};


export type MutationCreateNoteArgs = {
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type MutationEditNoteArgs = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID']
};

export type Note = {
   __typename?: 'Note',
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  notes?: Maybe<Array<Note>>,
  note: Note,
};


export type QueryNoteArgs = {
  id: Scalars['ID']
};


export type GetNotesQueryVariables = {};


export type GetNotesQuery = (
  { __typename?: 'Query' }
  & { notes: Maybe<Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )>> }
);

export type GetNoteQueryVariables = {
  id: Scalars['ID']
};


export type GetNoteQuery = (
  { __typename?: 'Query' }
  & { note: (
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  ) }
);

export type EditNoteMutationVariables = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type EditNoteMutation = (
  { __typename?: 'Mutation' }
  & { editNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  ) }
);

export type DeleteNoteMutationVariables = {
  id: Scalars['ID']
};


export type DeleteNoteMutation = (
  { __typename?: 'Mutation' }
  & { deleteNote: Maybe<(
    { __typename?: 'DeletedNote' }
    & Pick<DeletedNote, 'id'>
  )> }
);

export type CreateNoteMutationVariables = {
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { createNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  ) }
);


export const GetNotesDocument = gql`
    query GetNotes {
  notes {
    id
    title
    text
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNotesGQL extends Apollo.Query<GetNotesQuery, GetNotesQueryVariables> {
    document = GetNotesDocument;
    
  }
export const GetNoteDocument = gql`
    query GetNote($id: ID!) {
  note(id: $id) {
    id
    title
    text
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetNoteGQL extends Apollo.Query<GetNoteQuery, GetNoteQueryVariables> {
    document = GetNoteDocument;
    
  }
export const EditNoteDocument = gql`
    mutation EditNote($id: ID!, $title: String, $text: String) {
  editNote(id: $id, title: $title, text: $text) {
    id
    title
    text
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditNoteGQL extends Apollo.Mutation<EditNoteMutation, EditNoteMutationVariables> {
    document = EditNoteDocument;
    
  }
export const DeleteNoteDocument = gql`
    mutation DeleteNote($id: ID!) {
  deleteNote(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNoteGQL extends Apollo.Mutation<DeleteNoteMutation, DeleteNoteMutationVariables> {
    document = DeleteNoteDocument;
    
  }
export const CreateNoteDocument = gql`
    mutation CreateNote($title: String, $text: String) {
  createNote(title: $title, text: $text) {
    id
    title
    text
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNoteGQL extends Apollo.Mutation<CreateNoteMutation, CreateNoteMutationVariables> {
    document = CreateNoteDocument;
    
  }