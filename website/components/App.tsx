// @ts-ignore
import React from 'react';
import useStyles from '../hooks/useStyles';

import AppLayout from '../components/AppLayout';

import variablesCSS from '../../components/styles/variables.css';
import stylesCSS from '../../components/styles/styles.css';
import appCSS from './app.css';

const App = () => {
    useStyles([variablesCSS, stylesCSS, appCSS]);

    return (
        <React.StrictMode>
            <AppLayout />
        </React.StrictMode>
    );
};

export default App;
