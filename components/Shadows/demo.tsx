import React from 'react';
import raw from 'raw.macro';

import DemoView from '../../website/components/DemoView';
import HTMLView from '../../website/components/HTMLView';
import CSSView from '../../website/components/CSSView';

import Demo from './index';
import packageJson from './package.json';
import DemoPageTitle from '../../website/components/DemoPageTitle';

const codeString = raw('./index.html');
const cssString = raw('./index.css');

const DemoPage = () => {
    return (
        <>
            <DemoPageTitle title="Shadows" version={packageJson.version} />

            <DemoView>
                <Demo />
            </DemoView>

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
