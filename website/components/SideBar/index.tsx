import React, { SyntheticEvent } from 'react';
import useStyles from '../../hooks/useStyles';

import menuCSS from './index.css';

interface ISideBarProps {
    pages: string[];
    selectedPage: string;
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
}

const SideBar = ({ pages, selectedPage, setSelectedPage }: ISideBarProps) => {
    const styles = useStyles([menuCSS]);
    const clickHandler = (event: SyntheticEvent<HTMLAnchorElement>) => {
        const pageName = event.currentTarget.dataset.name;

        if (pageName) {
            setSelectedPage(pageName);
        }
    };

    return (
        <nav className={styles.sidbar_nav}>
            <div className={styles.title}>
                {' '}
                <b>Components</b>{' '}
            </div>
            <ul>
                {pages.map(page => {
                    return (
                        <li key={page} className={selectedPage === page ? styles.active : ''}>
                            <a href="#" data-name={page} onClick={clickHandler}>
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
