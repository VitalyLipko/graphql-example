import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { NgModule } from '@angular/core';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri: 'http://localhost:4000/' }),
    cache: new InMemoryCache(),
    queryDeduplication: false,
    connectToDevTools: true,
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
