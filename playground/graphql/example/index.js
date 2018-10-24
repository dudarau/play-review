const koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const { graphqlKoa } = require('apollo-server-koa');
const { makeExecutableSchema } = require('graphql-tools');
const koaPlayground = require('./playground');

const schema = makeExecutableSchema({
  typeDefs: `
    type Query {
      hello: String!,
      myDarling: String!,
      posts: String,
      postsq(firstName: String): String
    },
    schema {
      query: Query
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
      myDarling: () => 'My Darling',
      posts: (author) => {
        return author
      },
      postsq: (firstName) => {
        return `id=${firstName}`;
      }
    },
  },
});

const app = new koa();
const router = new koaRouter();
const PORT = 4000;

// koaBody is needed just for POST.
app.use(koaBody());

router.post('/graphql', graphqlKoa({ schema }));

router.all(
  '/playground',
  koaPlayground({
    endpoint: '/graphql',
  }),
);

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(
  `Serving the GraphQL Playground on http://localhost:${PORT}/playground`,
);