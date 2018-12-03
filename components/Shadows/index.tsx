import React from 'react';
import CSS from './index.css';
import useStyles from '../../website/hooks/useStyles';

const Shadows = () => {
    useStyles([CSS]);

    const boxStyles = {
        margin: '40px auto',
        'max-width': '300px',
        padding: '20px',
        'text-align': 'center',
        'box-sizing': 'border-box',
    };

    return (
        <>
            <div key="samll" style={{ ...boxStyles, boxShadow: 'var(--shadow-small)' }}>
                SMALL SHADOW EXAMPLE
            </div>
            <div key="medium" style={{ ...boxStyles, boxShadow: 'var(--shadow-medium)' }}>
                MEDIUM SHADOW EXAMPLE
            </div>
            <div key="large" style={{ ...boxStyles, boxShadow: 'var(--shadow-big)' }}>
                BIG SHADOW EXAMPLE
            </div>
        </>
    );
};

export default Shadows;
