import React, { useState } from 'react';
import cn from 'classnames';

import SideBarMenu from '../SideBarMenu';
import Content from '../Content';
import layoutCSS from './index.css';
import useStyles from '../../hooks/useStyles';
import demoPages from '../../../components/demoPages';

const AppLayout = () => {
    const styles = useStyles([layoutCSS]);
    const [isMenuVisible, setMenuVisible] = useState(true);
    const [selectedPage, setSelectedPage] = useState('');
    const pages = Object.keys(demoPages).sort();
    const getPage = demoPages[selectedPage] || (() => import(/* webpackChunkName: "IntroPage" */ '../IntroPage'));
    const containerClassnames = cn({
        [styles.container]: true,
        [styles.no_margin_left]: !isMenuVisible,
    });
    const menuBtnClickHandler = () => setMenuVisible(!isMenuVisible);

    return (
        <div className={containerClassnames}>
            <aside>
                <SideBarMenu pages={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </aside>
            <main className={styles.pageContent}>
                <Content getPage={getPage} menuBtnClickHandler={menuBtnClickHandler} />
            </main>
        </div>
    );
};

export default AppLayout;
