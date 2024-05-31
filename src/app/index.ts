import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';

const app = express();
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => 'svvsdv',
  },
};

export const initServer=async()=>{
  const graphqlServer=new ApolloServer({
    typeDefs,
    resolvers
  })

  await graphqlServer.start();

  app.use('/graphql',express.json(),expressMiddleware(graphqlServer))

  return app;
}
