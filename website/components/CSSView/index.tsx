import React from 'react';
import PreViewBlock from '../PreViewBlock';

import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import vs from 'react-syntax-highlighter/styles/prism/vs';

const CSSPreview = PreViewBlock('CSS');

const CSSView = props => {
    return (
        <CSSPreview>
            <SyntaxHighlighter language="css" style={vs}>
                {props.children}
            </SyntaxHighlighter>
        </CSSPreview>
    );
};

export default CSSView;
