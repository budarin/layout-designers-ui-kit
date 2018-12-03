import React from 'react';

import useStyles from '../../hooks/useStyles';
import contentCSS from './index.css';

import DemoPage from '../../../components/Button/demo';

const Content = () => {
    const styles = useStyles([contentCSS]);

    return (
        <>
            <div className={styles.top_bar}>
                <svg className={styles.menu_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                    <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />
                </svg>
                <span className={styles.title_component}>
                    Component: <b>Button</b>
                </span>
                <span className={styles.version_component}>
                    Version: <b>1.0.0</b>
                </span>
            </div>

            <div className={styles.content}>
                <DemoPage />
            </div>
        </>
    );
};

export default Content;
