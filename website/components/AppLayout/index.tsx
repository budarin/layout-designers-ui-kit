import React, { useState } from 'react';

import SideBar from '../SideBar';
import Content from '../Content';
import layoutCSS from './index.css';
import useStyles from '../../hooks/useStyles';
import demoPages from '../../../components/demoPages';

const AppLayout = () => {
    const styles = useStyles([layoutCSS]);
    const [selectedPage, setSelectedPage] = useState('');
    const pages = Object.keys(demoPages);
    const page = demoPages[selectedPage] || (() => import('../IntroPage'));

    return (
        <div className={styles.container}>
            <aside>
                <SideBar pages={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </aside>
            <main className={styles.pageContent}>
                <Content page={page} />
            </main>
        </div>
    );
};

export default AppLayout;
