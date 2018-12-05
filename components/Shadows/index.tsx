import React from 'react';

import demoCSS from './demo.css';
import indexCSS from './index.css';

import useStyles from '../../website/hooks/useStyles';

const Shadows = () => {
    const styles = useStyles([demoCSS]);

    useStyles([indexCSS]);

    return (
        <>
            <div style={{ boxShadow: 'var(--shadow-small)' }} key="samll" className={styles.demoBox}>
                SMALL SHADOW
            </div>
            <div style={{ boxShadow: 'var(--shadow-medium)' }} key="medium" className={styles.demoBox}>
                MEDIUM SHADOW
            </div>
            <div style={{ boxShadow: 'var(--shadow-big)' }} key="large" className={styles.demoBox}>
                BIG SHADOW
            </div>
        </>
    );
};

export default Shadows;
