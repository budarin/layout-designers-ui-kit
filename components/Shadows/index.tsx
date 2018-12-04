import React from 'react';

import demoCSS from './demo.css';
import indexCSS from './index.css';

import useStyles from '../../website/hooks/useStyles';

const Shadows = () => {
    const styles = useStyles([demoCSS]);

    useStyles([indexCSS]);

    return (
        <>
            <div key="samll" className={styles.demoBox} style={{ boxShadow: 'var(--shadow-small)' }}>
                SMALL SHADOW
            </div>
            <div key="medium" className={styles.demoBox} style={{ boxShadow: 'var(--shadow-medium)' }}>
                MEDIUM SHADOW
            </div>
            <div key="large" className={styles.demoBox} style={{ boxShadow: 'var(--shadow-big)' }}>
                BIG SHADOW
            </div>
        </>
    );
};

export default Shadows;
