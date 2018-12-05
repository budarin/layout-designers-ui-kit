import React, { SyntheticEvent, useCallback } from 'react';
import useStyles from '../../hooks/useStyles';

import menuCSS from './index.css';

interface ISideBarProps {
    pages: string[];
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({ pages, selectedPage, setSelectedPage }: ISideBarProps) => {
    const styles = useStyles([menuCSS]);
    const clickHandler = useCallback((event: SyntheticEvent<HTMLAnchorElement>) => {
        const pageName = event.currentTarget.dataset.name;

        if (pageName) {
            setSelectedPage(pageName);
        }
    }, []);

    return (
        <nav className={styles.sidbar_nav}>
            <div className={styles.title}>
                <h3>Components</h3>
            </div>
            <ul>
                {pages.map(page => {
                    return (
                        <li key={page} className={selectedPage === page ? styles.active : ''}>
                            <a href="#" data-name={page} onClick={clickHandler} title={page}>
                                {page}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SideBar;
