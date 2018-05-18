import React, { Component } from 'react';

class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteTitle: '',
            quote: '',
            quoteAttribution: '',
            output: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState( newState );
        this.props.handleChange(this.state)
    }

    onQuoteChange() {

    }

    onQuoteAttributionChange() {

    }

    render() {
        console.log(this.state);
        return (
            <div className="header-quote">
                <div class="form--text__input">
                    <input id="name" class="form--text__input--input" name="quoteTitle" onChange={this.onInputChange} placeholder="Taking it Seriously" type="text" value={this.state.quoteTitle} required/>
                    <label id="name-label" for="name" class="form--text__input--label label">Quote Title</label>
                </div>
                <div class="form--text__input">
                    <input id="name" class="form--text__input--input" name="quote" onChange={this.onInputChange} placeholder="Taking it Seriously" type="text" value={this.state.quote} required/>
                    <label id="name-label" for="name" class="form--text__input--label label">Quote Content</label>
                </div>
                <div class="form--text__input">
                    <input id="name" class="form--text__input--input" name="quoteAttribution" onChange={this.onInputChange} placeholder="Taking it Seriously" type="text" value={this.state.quoteAttribution} required/>
                    <label id="name-label" for="name" class="form--text__input--label label">Quote Author</label>
                </div>
            </div>
        )
    }
}

export default Quote;