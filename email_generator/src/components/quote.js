import React from 'react';


const Quote = (props) => {
    return (
        <div className="header-quote">
            <h2>Quote</h2>
            <div className="form--text__input">
                <input id="quoteTitle" className="form--text__input--input" name="quoteTitle" onChange={props.handleChange} placeholder="Taking it Seriously" type="text" value={props.state.quoteTitle} required/>
                <label htmlFor="quoteTitle" className="form--text__input--label label">Quote Title</label>
            </div>
            <div className="form--text__input">
                <textarea rows="5" id="quote" className="form--text__input--input" name="quote" onChange={props.handleChange} placeholder="Anything you suck at should make you nervous." type="text" value={props.state.quote}></textarea>
                {/* <input id="quote" className="form--text__input--input" name="quote" onChange={props.handleChange} placeholder="Anything you suck at should make you nervous." type="text" value={props.state.quote} required/> */}
                <label htmlFor="quote" className="form--text__input--label label">Quote Content</label>
            </div>
            <div className="form--text__input">
                <input id="quoteAttribution" className="form--text__input--input" name="quoteAttribution" onChange={props.handleChange} placeholder="Chris Rock" type="text" value={props.state.quoteAttribution} required/>
                <label htmlFor="quoteAttribution" className="form--text__input--label label">Quote Author</label>
            </div>
        </div>
    )
}

export default Quote;
