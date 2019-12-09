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

export type Mutation = {
   __typename?: 'Mutation',
  createNote?: Maybe<Array<Note>>,
  editNote?: Maybe<Array<Note>>,
  deleteNote?: Maybe<Array<Note>>,
};


export type MutationCreateNoteArgs = {
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type MutationEditNoteArgs = {
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  id: Scalars['String']
};


export type MutationDeleteNoteArgs = {
  id: Scalars['String']
};

export type Note = {
   __typename?: 'Note',
  id: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  notes?: Maybe<Array<Note>>,
  note?: Maybe<Note>,
};


export type QueryNoteArgs = {
  id: Scalars['String']
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
  id: Scalars['String']
};


export type GetNoteQuery = (
  { __typename?: 'Query' }
  & { note: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )> }
);

export type EditNoteMutationVariables = {
  id: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type EditNoteMutation = (
  { __typename?: 'Mutation' }
  & { editNote: Maybe<Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )>> }
);

export type DeleteNoteMutationVariables = {
  id: Scalars['String']
};


export type DeleteNoteMutation = (
  { __typename?: 'Mutation' }
  & { deleteNote: Maybe<Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )>> }
);

export type CreateNoteMutationVariables = {
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>
};


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { createNote: Maybe<Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )>> }
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
    query GetNote($id: String!) {
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
    mutation EditNote($id: String!, $title: String, $text: String) {
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
    mutation DeleteNote($id: String!) {
  deleteNote(id: $id) {
    id
    title
    text
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