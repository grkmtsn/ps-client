import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphql/client';

import App from './App';

const Root = () => (
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);

ReactDOM.render(Root, document.getElementById('root'));

module.hot.accept();


