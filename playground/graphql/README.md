# GraphQL

- [intro](https://www.howtographql.com/basics/0-introduction/)
- [Core Concepts with playground](https://www.howtographql.com/basics/2-core-concepts/)
- [Specification](https://facebook.github.io/graphql/)
- [Security & Validation of queries](https://www.howtographql.com/advanced/4-security/)
- [Authorization](https://graphql.org/learn/authorization/)
- [Caching](https://graphql.org/learn/caching/)
- [Playground](https://github.com/prisma/graphql-playground)
- [Shopify Tutorial: Designing a GraphQL API](https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md)

### Server
- [Basics-Network](https://www.prisma.io/blog/graphql-server-basics-the-network-layer-51d97d21861/)
- [Basics-Schemas, TypeDefs & Resolvers](https://www.prisma.io/blog/graphql-server-basics-the-schema-ac5e2950214e/)
- [Basics-Demystifying the `info` Argument in Resolvers](https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a/)
- [Tutorial Build Server](https://blog.apollographql.com/tutorial-building-a-graphql-server-cddaa023c035) [Apollo](https://www.apollographql.com/docs/apollo-server/getting-started.html)
- [For other languages](https://www.howtographql.com/choose/)
- [Schema Explorer](https://github.com/apollographql/engine-docs/blob/master/source/features/schema-explorer.md) tool for schema management
- [MongoDb + Express](https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474)

### clients
There are two major GraphQL clients available at the moment. The first one is [Apollo Client](https://github.com/apollographql/apollo-client), which is a community-driven effort to build a powerful and flexible GraphQL client for all major development platforms. The second one is called [Relay](https://facebook.github.io/relay/) and it is Facebook’s homegrown GraphQL client that heavily optimizes for performance and is only available on the web. 

- [React + Apollo Tutorial](https://www.howtographql.com/react-apollo/0-introduction/)
- [For React/Redux](https://blog.apollographql.com/apollo-client-graphql-with-react-and-redux-49b35d0f2641) - strange but interesting approach
- [Unit-tests for React+Apollo](https://www.apollographql.com/docs/guides/testing-react-components.html)

[Relay](https://facebook.github.io/relay/) is pretty complex framework if we compare to Apollo.
[Relay Modern](https://www.youtube.com/watch?v=5WjXX9-Vu-o)
[Relay Examples](https://github.com/relayjs/relay-examples) 


### utilities
- [dataloader](https://github.com/facebook/dataloader) DataLoader is a generic utility to be used as part of your application's data fetching layer to provide a consistent API over various backends and reduce requests to those backends via batching and caching.
  

### hosting
[Self-hosted service that provides GraphQl](https://www.graph.cool/)
[with AWS](https://read.acloud.guru/8-steps-to-building-your-own-serverless-graphql-api-using-aws-amplify-42c21770424d)

### Real GraphQl APIs

[Github](https://developer.github.com/v4/guides/)

### Real GraphQl use-cases

[New York Times](https://open.nytimes.com/the-new-york-times-now-on-apollo-b9a78a5038c)

### Pros / Cons

- [Advantages/Disadvantages](https://www.robinwieruch.de/why-graphql-advantages-disadvantages-alternatives/)
- [Good and Bad Reasons](https://honest.engineering/posts/why-use-graphql-good-and-bad-reasons)

#### Pros

Simplify access to many APIs

#### Cons

A little bit complex syntax.
More complex caching

### Questions

How to make condition queries