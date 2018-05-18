import React from 'react';

import Quote from './quote';
import './editor.css';

const Editor = (props) => {
    return (
        <div className="editor">
            <Quote handleChange={props.handleChange} />
        </div>
    )
}

export default Editor;
