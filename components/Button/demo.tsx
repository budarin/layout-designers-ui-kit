import React from 'react';

import ResultView from '../../website/components/ResultView';
import HTMLView from '../../website/components/HTMLView';
import CSSView from '../../website/components/CSSView';

import Button from './index';

const codeString = require('!!raw-loader!./index.html');
const cssString = require('!!raw-loader!./index.css');

const DemoPage = () => {
    return (
        <>
            <p>Некоторое описание компонента</p>

            <ResultView>
                <Button>Hello!</Button>
            </ResultView>

            <HTMLView>{codeString}</HTMLView>

            <CSSView>{cssString}</CSSView>

            <p>gfjgjhgjhgj</p>
        </>
    );
};

export default DemoPage;
