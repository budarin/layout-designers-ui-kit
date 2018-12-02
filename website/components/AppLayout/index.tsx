import React from 'react';
import useStyles from '../../hooks/useStyles';

import layoutCSS from './index.css';

import SideBar from '../SideBar';
import Content from '../Content';

const AppLayout = () => {
    const styles = useStyles([layoutCSS]);

    return (
        <div className={styles.container}>
            <aside>
                <SideBar />
            </aside>
            <main className={styles.pageContent}>
                <Content />
            </main>
        </div>
    );
};

export default AppLayout;
