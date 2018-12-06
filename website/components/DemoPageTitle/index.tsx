import React from 'react';
import useStyles from '../../hooks/useStyles';

import titleCSS from './index.css';

interface IDemoPageTitleProps {
    title: string;
    version: string;
}

const DemoPageTitle = (props: IDemoPageTitleProps) => {
    const styles = useStyles([titleCSS]);

    return (
        <div className={styles.demoPageTitle}>
            <h2>{props.title}</h2>&nbsp;&nbsp;&nbsp;<span>ver: </span>
            <span className={styles.version}>{props.version}</span>
        </div>
    );
};

export default DemoPageTitle;
