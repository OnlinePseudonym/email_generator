import React from 'react';

const Anniversary = (props) => {
    return (
        <div className="form-wrapper">
            <div className="form--text__input">
                <input id="name" className="form--text__input--input" name="name" onChange={props.handleChange} placeholder="Billy Lavidge" type="text" value={props.reminders[props.reminders.length-1].name} />
                <label htmlFor="name" className="form--text__input--label label">Name</label>
            </div>
            <div className="form--text__input">
                <input id="years" className="form--text__input--input" name="years" onChange={props.handleChange} placeholder="Billy Lavidge" type="text" value={props.reminders[props.reminders.length-1].years} />
                <label htmlFor="years" className="form--text__input--label label">Years</label>
            </div>
        </div>
    )
}

export default Anniversary;
