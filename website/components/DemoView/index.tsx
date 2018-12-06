import React from 'react';

import useStyles from '../../hooks/useStyles';
import PreViewBlockCSS from '../PreViewBlock/index.css';

const DemoView = props => {
    const styles = useStyles([PreViewBlockCSS]);

    return (
        <div className={styles.preview} tabIndex={0}>
            <div className={styles.title}>
                <h3>Demo</h3>
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

export default DemoView;
