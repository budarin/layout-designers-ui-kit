// @ts-ignore
import React, { useEffect } from 'react';
import useStyles from '../hooks/useStyles';
import css from './app.css';

const App = () => {
    const styles = useStyles(css);

    return <div className={styles.app}>Hello!</div>;
};

export default App;
