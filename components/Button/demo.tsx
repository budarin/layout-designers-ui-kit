import React from 'react';

import ResultView from '../../website/components/ResultView';
import HTMLView from '../../website/components/HTMLView';
import CSSView from '../../website/components/CSSView';

import Button from './index';
import packageJson from './package.json';

const codeString = require('!!raw-loader!./index.html');
const cssString = require('!!raw-loader!./index.css');

const DemoPage = () => {
    return (
        <>
            <h2>Button</h2> ver. {packageJson.version}
            <ResultView>
                <Button>Hello!</Button>
            </ResultView>
            <HTMLView>{codeString}</HTMLView>
            <CSSView>{cssString}</CSSView>
            <p>Descriptions:</p>
            <p>Params:</p>
        </>
    );
};

export default DemoPage;
