import React from 'react';

const KitchenDuty = (props) => {
    return (
        <div className="form--text__input">
            <input id="name" className="form--text__input--input" name={props.eventType} onChange={props.handleChange} placeholder="Billy Lavidge" type="text" value={props.reminders[props.reminders.length-1].name} />
            <label htmlFor="name" className="form--text__input--label label">Name</label>
        </div>
    )
}

export default KitchenDuty;
