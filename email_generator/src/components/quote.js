import React, { Component } from 'react';



class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteTitle: '',
            quote: '',
            quoteAttribution: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(e) {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState( newState );
    }

    onQuoteChange() {

    }

    onQuoteAttributionChange() {

    }

    render() {
        let output = `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><h2 style="color:#F57E4D; font-size:16px; font-weight:700;">${this.state.quoteTitle}</h2><p style="font-size:15px;">${this.state.quote}</p><p style="font-size:15px;">${this.state.quoteAttribution}</p><p style="font-size:12px; font-style:italic;">Photo: Ricardo DeAratahna, Los Angeles Times</p></td></tr>`;
        this.props.handleChange(output);

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