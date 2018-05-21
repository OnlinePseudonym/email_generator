import React from 'react';

const Birthday = (props) => {
    return (
        <form onSubmit={props.addReminder}>
            <div className="form--text__input">
                <input id="name" className="form--text__input--input" name={props.eventType} onChange={props.handleChange} placeholder="Billy Lavidge" type="text" value={props.reminders[props.reminders.length-1].name} />
                <label htmlFor="name" className="form--text__input--label label">Name</label>
            </div>
            <button className="add-meeting" type="submit">ADD</button>
        </form>
    )
}

export default Birthday;
