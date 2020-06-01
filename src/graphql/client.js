/* eslint-disable import/prefer-default-export */
import ApolloClient from 'apollo-boost';

const URI = 'http://localhost:4000/graphql';

export const client = new ApolloClient({
    uri: URI
});