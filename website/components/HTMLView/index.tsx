import React from 'react';
import PreViewBlock from '../PreViewBlock';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-async-light';
import vs from 'react-syntax-highlighter/styles/prism/vs';

const HTMLPreview = PreViewBlock('Code');

const HTMLView = props => {
    return (
        <HTMLPreview>
            <SyntaxHighlighter language="javascript" style={vs}>
                {props.children}
            </SyntaxHighlighter>
        </HTMLPreview>
    );
};

export default HTMLView;
