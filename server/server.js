import express from 'express';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'Hello World!'
};

const app = express();
app.use(
  '/graphql',
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000, () =>
  console.log('Express GraphQL Server Now RUnning On localhost:4000/graphql')
);
