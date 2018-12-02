import React from 'react';
import cn from 'classnames';

import useStyles from '../../hooks/useStyles';
import contentCSS from './index.css';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-async-light';

// import js from 'react-syntax-highlighter/languages/prism/javascript';
// import css from 'react-syntax-highlighter/languages/prism/css';
// import markdown from 'react-syntax-highlighter/languages/prism/markdown';

import docco from 'react-syntax-highlighter/styles/prism/vs';

import Button from './importdedComponents';

// SyntaxHighlighter.registerLanguage('jsx', js);
// SyntaxHighlighter.registerLanguage('css', css);
// SyntaxHighlighter.registerLanguage('markdown', markdown);

const codeString = `import React, { lazy, Suspense } from 'react';
const OtherComponent = lazy(() => import('../../../components/Button'));

function MyComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
        </Suspense>
    );
}

export default MyComponent;`;

const cssString = `.foo {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: white;
    color: black;
}`;

// const markdownString = `## React Syntax Highlighter

// [![CircleCI](https://circleci.com/gh/conorhastings/react-syntax-highlighter.svg?style=svg)](https://circleci.com/gh/conorhastings/react-syntax-highlighter)
// [![codecov](https://codecov.io/gh/conorhastings/react-syntax-highlighter/branch/master/graph/badge.svg)](https://codecov.io/gh/conorhastings/react-syntax-highlighter)
// [![npm](https://img.shields.io/npm/dw/react-syntax-highlighter.svg?style=flat-square)](https://www.npmjs.com/package/react-syntax-highlighter)

// Syntax highlighting component for \`React\` using the seriously super amazing <a href="https://github.com/wooorm/lowlight">lowlight</a> and <a href="https://github.com/wooorm/refractor">refractor</a> by <a href="https://github.com/wooorm">wooorm</a>

// Check out a small website <a href="http://conor.rodeo/react-syntax-highlighter/website/">here</a> and see the component in action highlighting the generated test code <a href="http://conor.rodeo/redux-test-recorder/website/">here</a>.

// For React Native you can use <a href='https://github.com/conorhastings/react-native-syntax-highlighter'>react-native-syntax-highlighter</a>

// ### Install

// \`npm install react-syntax-highlighter --save\`

// ### Why This One?`;

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
