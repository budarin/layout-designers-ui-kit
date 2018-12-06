import React, { SyntheticEvent, useCallback } from 'react';
import useStyles from '../../hooks/useStyles';

import menuCSS from './index.css';

interface ISideBarProps {
    pages: string[];
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const SideBarMenu = ({ pages, selectedPage, setSelectedPage }: ISideBarProps) => {
    const styles = useStyles([menuCSS]);
    const clickHandler = useCallback((event: SyntheticEvent<HTMLAnchorElement>) => {
        const pageName = event.currentTarget.dataset.name;

        if (pageName) {
            setSelectedPage(pageName);
        }
    }, []);

    return (
        <nav className={styles.componentList}>
            <div className={styles.title}>
                <b>Components</b>
            </div>
            <ul>
                {pages.map(page => {
                    return (
                        <li key={page}>
                            <a
                                href="#"
                                data-name={page}
                                onClick={clickHandler}
                                title={page}
                                className={selectedPage === page ? styles.active : ''}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SideBarMenu;
