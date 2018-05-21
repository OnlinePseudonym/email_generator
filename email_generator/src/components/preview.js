import React from 'react';

const Preview = (props) => {
    return (
        <div className="preview" dangerouslySetInnerHTML={{__html: props.markup}} />
    )
}

export default Preview;