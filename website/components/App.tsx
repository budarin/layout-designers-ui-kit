// @ts-ignore
import React from 'react';
import useStyles from '../hooks/useStyles';

import AppLayout from '../components/AppLayout';

import globalStyles from '../../components/styles/all_styles.css';
import appCSS from './app.css';

const App = () => {
    useStyles([globalStyles, appCSS]);

    return (
        <React.StrictMode>
            <AppLayout />
        </React.StrictMode>
    );
};

export default App;
