import React, { Component } from 'react';

import Preview from './preview';
import Editor from './editor';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            quote: `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><h2 style="color:#F57E4D; font-size:16px; font-weight:700;">Taking it Seriously</h2><p style="font-size:15px;">Anything you suck at should make you nervous.</p><p style="font-size:15px;">- Chris Rock</p><p style="font-size:12px; font-style:italic;">Photo: Ricardo DeAratahna, Los Angeles Times</p></td></tr>`,
        })

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(quote) {
        this.setState({ quote: quote.output, });
    }

    render() {
        console.log(this.state, 'app');
        return (
            <div className="app">
                <Editor handleChange={this.handleChange} />
                <Preview quote={this.state.quote} />
            </div>
        )
    }
}

export default App;