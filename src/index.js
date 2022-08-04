import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

export const contextOptions = {
    baseUrl: 'https://app-pdhkpiyaggqv.frontegg.com',
    clientId: 'c47a9e07-dc50-4be7-9512-b7db977a7f32'
};

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={false}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
