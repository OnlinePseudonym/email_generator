import React from 'react';

import './hero.css';

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="form--text__input">
                <input id="hero" className="form--text__input--input" name="hero" onChange={props.handleChange} placeholder="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/hero_image_511x322.png" type="text" value={props.value} required/>
                <label htmlFor="hero" className="form--text__input--label label">Hero URL</label>
            </div>
        </div>
    )
}

export default Hero;
