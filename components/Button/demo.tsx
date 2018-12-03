import React from 'react';

import HTMLView from '../../website/components/HTMLView';
import CSSView from '../../website/components/CSSView';

import Button from './index';
import ResultView from '../../website/components/ResultView';
// tslint:disable-next-line
const codeString = require('!!raw-loader!./index.tsx');
// tslint:disable-next-line
const cssString = require('!!raw-loader!./index.css');

const DemoPage = () => {
    return (
        <>
            <p>Некоторое описание компонента</p>

            <ResultView>
                <Button />
            </ResultView>

            <HTMLView>{codeString}</HTMLView>

            <CSSView>{cssString}</CSSView>
        </>
    );
};

export default DemoPage;
