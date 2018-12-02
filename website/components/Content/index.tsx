import React from 'react';
import cn from 'classnames';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-async-light';
import docco from 'react-syntax-highlighter/styles/prism/vs';

import useStyles from '../../hooks/useStyles';
import contentCSS from './index.css';

import Button from './importdedComponents';
// tslint:disable-next-line
const codeString = require('!!raw-loader!../../../components/Button/index.tsx');
// tslint:disable-next-line
const cssString = require('!!raw-loader!../../../components/Button/index.css');

const Content = () => {
    const styles = useStyles([contentCSS]);
    const codePrevieClass = cn(styles.preview, styles.code);

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
                <p>Некоторое описание компонента</p>

                <div className={styles.preview} tabIndex={0}>
                    <div className={styles.title}>
                        <h2>Пример</h2>
                    </div>

                    <Button />
                </div>

                <div className={codePrevieClass} tabIndex={0}>
                    <div className={styles.title}>
                        <div>
                            <h2>HTML</h2>
                        </div>
                        <div className={styles.copy_btn}>Copy</div>
                    </div>
                    <SyntaxHighlighter language="jsx" style={docco}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                <div className={codePrevieClass} tabIndex={0}>
                    <div className={styles.title}>
                        <div>
                            <h2>CSS</h2>
                        </div>
                        <div className={styles.copy_btn}>Copy</div>
                    </div>
                    <SyntaxHighlighter language="css" style={docco}>
                        {cssString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
};

export default Content;
