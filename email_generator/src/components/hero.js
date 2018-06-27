import React from 'react';

import './hero.css';

const Hero = (props) => {
    const dropdown = props.heroNames.map(file => {
        return `<option className="form--dropdown__input--option">${file}</option>`
    });

    dropdown.unshift('<option className="form--dropdown__input--option" disabled selected value> -- select an option -- </option>')

    return (
        <div className="hero">
            <h2>Hero Image</h2>
            <select className="form--dropdown__input--select" dangerouslySetInnerHTML={{__html: dropdown }} id="hero-dropdown" name="hero-dropdown" onChange={props.handleSelect} value={props.value} />
        </div>
    )
}

export default Hero;
