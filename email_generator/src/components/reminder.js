import React from 'react';

const Reminder = (props) => {
    return (
        <div className="reminder">
            <p className="name">{props.name}</p>
            <button className="remove-item" onClick={ () => props.removeReminder(props.index) } >X</button>
        </div>

    )
}

export default Reminder;
