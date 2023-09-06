import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

export const useApollo = () => {
  // HTTP connection to the API
  const link = createHttpLink({
    // You should use an absolute URL here
    uri: new URL("graphql", import.meta.env.VITE_API_URL).href,
  });

  // Cache implementation
  const cache = new InMemoryCache({ addTypename: false });

  // Create the apollo client
  return new ApolloClient({
    link,
    cache,
  });
};
