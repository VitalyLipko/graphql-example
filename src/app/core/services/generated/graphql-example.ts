import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};



export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateNoteInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type EditNoteInput = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createNote: Note;
  editNote: Note;
  deleteNote?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateNoteArgs = {
  note: CreateNoteInput;
};


export type MutationEditNoteArgs = {
  note: EditNoteInput;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['ID'];
};

export type Note = {
   __typename?: 'Note';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  notes?: Maybe<Array<Note>>;
  note?: Maybe<Note>;
};


export type QueryNoteArgs = {
  id: Scalars['ID'];
};


export type GetNotesQueryVariables = {};


export type GetNotesQuery = (
  { __typename?: 'Query' }
  & { notes?: Maybe<Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )>> }
);

export type GetNoteQueryVariables = {
  id: Scalars['ID'];
};


export type GetNoteQuery = (
  { __typename?: 'Query' }
  & { note?: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'title' | 'text'>
  )> }
);

export type EditNoteMutationVariables = {
  note: EditNoteInput;
};


export type EditNoteMutation = (
  { __typename?: 'Mutation' }
  & { editNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'id'>
  ) }
);

export type DeleteNoteMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteNoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteNote'>
);

export type CreateNoteMutationVariables = {
  note: CreateNoteInput;
};


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { createNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'id'>
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
    mutation EditNote($note: EditNoteInput!) {
  editNote(note: $note) {
    id
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
  deleteNote(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteNoteGQL extends Apollo.Mutation<DeleteNoteMutation, DeleteNoteMutationVariables> {
    document = DeleteNoteDocument;
    
  }
export const CreateNoteDocument = gql`
    mutation CreateNote($note: CreateNoteInput!) {
  createNote(note: $note) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNoteGQL extends Apollo.Mutation<CreateNoteMutation, CreateNoteMutationVariables> {
    document = CreateNoteDocument;
    
  }