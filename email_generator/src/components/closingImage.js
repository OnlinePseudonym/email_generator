import React from 'react';

import './closingImage.css';

const ClosingImage = (props) => {
    const dropdown = props.closingNames.map(file => {
        return `<option className="form--dropdown__input--option">${file}</option>`
    });

    dropdown.unshift('<option className="form--dropdown__input--option" disabled selected value> -- select an option -- </option>')

    return (
        <div className="closing-image">
            <h2>Closing Image</h2>
            <select className="form--dropdown__input--select" dangerouslySetInnerHTML={{__html: dropdown }} id="closing-dropdown" name="closing-dropdown" onChange={props.handleSelect} value={props.value} />
        </div>
    )
}

export default ClosingImage;
