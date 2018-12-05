import React from 'react';
import raw from 'raw.macro';

import ResultView from '../../website/components/ResultView';
import HTMLView from '../../website/components/HTMLView';
import CSSView from '../../website/components/CSSView';

import Button from './index';
import packageJson from './package.json';

const codeString = raw('./index.html');
const cssString = raw('./index.css');

const DemoPage = () => {
    return (
        <>
            <h2>Button</h2> ver. {packageJson.version}
            <ResultView>
                <Button>Hello!</Button>
            </ResultView>
            <HTMLView>{codeString}</HTMLView>
            <CSSView>{cssString}</CSSView>
            <section>
                <p>Descriptions:</p>
                <p>Params:</p>
            </section>
        </>
    );
};

export default DemoPage;
