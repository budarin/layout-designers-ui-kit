// @ts-ignore
import React, { useEffect } from 'react';
import useStyles from '../hooks/useStyles';
import css from './app.css';
import css1 from './app1.css';

const App = () => {
    const styles = useStyles([css, css1]);

    return <div className={`${styles.app} ${styles.app1}`}>Hello!</div>;
};

export default App;
