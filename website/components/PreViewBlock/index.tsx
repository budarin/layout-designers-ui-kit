import React, { SFC } from 'react';
import cn from 'classnames';

import useStyles from '../../hooks/useStyles';
import PreViewBlockCSS from './index.css';

const PreViewBlock = (title: string): SFC => props => {
    const styles = useStyles([PreViewBlockCSS]);
    const codePrevieClass = cn(styles.preview, styles.code);

    return (
        <div className={codePrevieClass} tabIndex={0}>
            <div className={styles.title}>
                <div>
                    <h3>{title}</h3>
                </div>
                <div className={styles.copy_btn}>Copy</div>
            </div>

            {props.children}
        </div>
    );
};

export default PreViewBlock;
