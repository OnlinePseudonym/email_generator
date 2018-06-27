import React from 'react';
import './testimonials.css';

const Testimonials = (props) => {
    return (
        <div className="testimonials">
            <h2>Become Indispensable</h2>
            <div className="form--text__input">
                <input id="testimonialHeadline" className="form--text__input--input" name="testimonialHeadline" onChange={props.handleChange} placeholder="Becoming Indispensible" type="text" value={props.state.testimonialHeadline} required/>
                <label htmlFor="testimonialHeadline" className="form--text__input--label label">Headline</label>
            </div>
            <div className="form--text__input">
                <input id="testimonialSubHeadline" className="form--text__input--input" name="testimonialSubHeadline" onChange={props.handleChange} placeholder="Reduce Client Stress Today" type="text" value={props.state.testimonialSubHeadline} required/>
                <label htmlFor="testimonialSubHeadline" className="form--text__input--label label">Sub Headline</label>
            </div>
            <div className="form--text__input">
                <textarea rows="5"  id="testimonialContent" className="form--text__input--input" name="testimonialContent" onChange={props.handleChange} placeholder={`Randy Schultz amazed his client (APS) yesterday by visiting them at their office and brought them Starbucks. "When Randy showed up with Pumpkin Spice Latte's for everyone we all could breathe easier."`} type="text" value={props.state.testimonialContent} ></textarea>
                {/* <input id="testimonialContent" className="form--text__input--input" name="testimonialContent" onChange={props.handleChange} placeholder={`Randy Schultz amazed his client (APS) yesterday by visiting them at their office and brought them Starbucks. "When Randy showed up with Pumpkin Spice Latte's for everyone we all could breathe easier."`} type="text" value={props.state.testimonialContent} required/> */}
                <label htmlFor="testimonialContent" className="form--text__input--label label">Content</label>
            </div>
            <div className="form--text__input">
                <input id="testimonialAttribution" className="form--text__input--input" name="testimonialAttribution" onChange={props.handleChange} placeholder="Jane Doe, APS -CMO" type="text" value={props.state.testimonialAttribution} required/>
                <label htmlFor="testimonialAttribution" className="form--text__input--label label">Attribution</label>
            </div>
        </div>
    )
}

export default Testimonials;
