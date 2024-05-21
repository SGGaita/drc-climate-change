import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

/**
 * Default options for various Apollo Client operations.
 * 
 * - watchQuery:
 *   - fetchPolicy: "no-cache" - Disables caching for watch queries to ensure fresh data on every request.
 *   - errorPolicy: "ignore" - Silently ignores errors during watch queries, potentially leading to missed updates.
 * - query:
 *   - fetchPolicy: "no-cache" - Disables caching for queries to ensure fresh data on every request.
 *   - errorPolicy: "all" - Reports all errors encountered during queries for appropriate handling.
 */
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

/**
 * In-memory cache configuration for Apollo Client.
 * 
 * - resultCaching: false - Disables caching of results in the in-memory cache.
 */
const cache = new InMemoryCache({
  resultCaching: false,
});

/**
 * Creates an HttpLink for connecting Apollo Client to the GraphQL endpoint.
 * 
 * - uri: Uses the REACT_APP_WORDPRESS_SITE_URL environment variable to construct the GraphQL endpoint URL. 
 *         - A warning message is logged to the console if the variable is not set.
 */
const link = createHttpLink({
  uri: `${process.env.REACT_APP_WORDPRESS_SITE_URL}/graphql`,
});

console.warn('REACT_APP_WORDPRESS_SITE_URL', process.env.REACT_APP_WORDPRESS_SITE_URL);

/**
 * Creates an ApolloClient instance configured with the cache, link, and default options.
 */
const client = new ApolloClient({
  link,
  cache,
  defaultOptions,
});

export default client;
