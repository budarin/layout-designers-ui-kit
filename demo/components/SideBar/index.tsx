import React from 'react';
import useStyles from '../../hooks/useStyles';

import menuCSS from './index.css';

const SideBar = () => {
    const styles = useStyles([menuCSS]);

    return (
        <nav className={styles.sidbar_nav}>
            <div className={styles.title}>
                {' '}
                <b>Components</b>{' '}
            </div>
            <ul>
                <li>
                    <a href="">Component 1</a>
                </li>
                <li>
                    <a href="">Component 2</a>
                </li>
                <li>
                    <a className={styles.active} href="">
                        Component 3
                    </a>
                </li>
                <li>
                    <a href="">Component 4</a>
                </li>
                <li>
                    <a href="">Component 5</a>
                </li>
                <li>
                    <a href="">Component 6</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;
