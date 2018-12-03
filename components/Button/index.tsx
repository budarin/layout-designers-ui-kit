import React from 'react';
import buttonCSS from './index.css';
import useStyles from '../../website/hooks/useStyles';

const Button = props => {
    const styles = useStyles([buttonCSS]);

    return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
