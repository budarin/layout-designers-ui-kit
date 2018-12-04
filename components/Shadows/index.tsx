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
                SMALL SHADOW EXAMPLE
            </div>
            <div key="medium" className={styles.demoBox} style={{ boxShadow: 'var(--shadow-medium)' }}>
                MEDIUM SHADOW EXAMPLE
            </div>
            <div key="large" className={styles.demoBox} style={{ boxShadow: 'var(--shadow-big)' }}>
                BIG SHADOW EXAMPLE
            </div>
        </>
    );
};

export default Shadows;
