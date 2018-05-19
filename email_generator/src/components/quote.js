import React from 'react';



const Quote = (props) => {
    return (
        <div className="header-quote">
            <div class="form--text__input">
                <input id="quoteTitle" class="form--text__input--input" name="quoteTitle" onChange={props.handleChange} placeholder="Taking it Seriously" type="text" value={props.state.quoteTitle} required/>
                <label for="quoteTitle" class="form--text__input--label label">Quote Title</label>
            </div>
            <div class="form--text__input">
                <input id="quote" class="form--text__input--input" name="quote" onChange={props.handleChange} placeholder="Anything you suck at should make you nervous." type="text" value={props.state.quote} required/>
                <label for="quote" class="form--text__input--label label">Quote Content</label>
            </div>
            <div class="form--text__input">
                <input id="quoteAttribution" class="form--text__input--input" name="quoteAttribution" onChange={props.handleChange} placeholder="Chris Rock" type="text" value={props.state.quoteAttribution} required/>
                <label for="quoteAttribution" class="form--text__input--label label">Quote Author</label>
            </div>
            <div class="form--text__input">
                <input id="photographer" class="form--text__input--input" name="photographer" onChange={props.handleChange} placeholder="Ricardo DeAratahna, Los Angeles Times" type="text" value={props.state.photographer} required/>
                <label for="photographer" class="form--text__input--label label">Photographer</label>
            </div>
        </div>
    )
}

export default Quote;