import React from 'react';

import useStyles from '../../hooks/useStyles';
import PreViewBlockCSS from '../PreViewBlock/index.css';

const ResultView = props => {
    const styles = useStyles([PreViewBlockCSS]);

    return (
        <div className={styles.preview} tabIndex={0}>
            <div className={styles.title}>
                <h3 style={{ marginTop: 0 }}>Result</h3>
            </div>

            {props.children}
        </div>
    );
};

export default ResultView;
