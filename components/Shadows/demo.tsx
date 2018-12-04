import React from 'react';

import ResultView from '../../website/components/ResultView';
import HTMLView from '../../website/components/HTMLView';
import CSSView from '../../website/components/CSSView';

import Demo from './index';
import packageJson from './package.json';

const codeString = require('!!raw-loader!./index.html');
const cssString = require('!!raw-loader!./index.css');

const DemoPage = () => {
    return (
        <>
            <h2>Shadows</h2> ver. {packageJson.version}
            <ResultView>
                <Demo />
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
