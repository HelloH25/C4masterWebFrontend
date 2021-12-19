import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";
  
  const apollo = new ApolloClient({
    uri:'http://localhost:9091/graphql',
    cache: new InMemoryCache()
  })
  
  export default apollo