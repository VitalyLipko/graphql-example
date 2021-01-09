# GraphqlExample

Simple full stack project with GraphQL API implementation:

- Front: [`angular`](https://github.com/angular/angular) + [`ng-zorro-antd`](https://github.com/NG-ZORRO/ng-zorro-antd) + [`@apollo/client`](https://github.com/apollographql/apollo-client) + [`apollo-angular`](https://github.com/kamilkisiela/apollo-angular);
- Back: NodeJS + [`apollo-server`](https://github.com/apollographql/apollo-server).

## Development

1. Run `npm start:dev-apollo` for a simple backend dev server with `Apollo Server`. Navigate to `http://localhost:4000/` for start Playground GraphQL. The app will automatically reload if you change any of the source files in `back` directory;
2. Run `npm start` for a frontend dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files in `src` directory.

## Update GraphQL Schema

Run `npm fetch:schema` for fetch a GraphQL schema from local server.

## GraphQL Code Generator

Run `npm generate:graphql` for generate TypeScript typings and Apollo Angular services out of a GraphQL schema.
