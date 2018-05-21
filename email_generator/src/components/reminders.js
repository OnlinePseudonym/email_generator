import React from 'react';

import Anniversary from './anniversary';
import Birthday from './birthday';
import Default from './default';
import KitchenDuty from './kitchenDuty';
import Reminder from './reminder';

const Reminders = (props) => {

    const components = {
        null: Default,
        'Anniversary': Anniversary,
        'Birthday': Birthday,
        'Kitchen Duty': KitchenDuty,
    }

    const EventType = components[props.eventType];

    const reminders = props.reminders.map((obj, index) => {
            if (index < props.reminders.length-1) {
                return <Reminder index={index} name={obj.name} removeReminder={props.removeReminder} />;
            }
            return ''
        });

    return (
        <div class="form--dropdown__input">
            <h2>Reminders</h2>
            {reminders}
            <label class="form-dropdown__input--label" for="motivation">Event Type</label>
            <div>
                <select class="form--dropdown__input--select" id="dropdown" name="motivation" onChange={props.handleSelect} value={props.eventType} >
                    <option class="form--dropdown__input--option" disabled selected value> -- select an option -- </option>
                    <option class="form--dropdown__input--option">Birthday</option>
                    <option class="form--dropdown__input--option">Anniversary</option>
                    <option class="form--dropdown__input--option">Kitchen Duty</option>
                </select>
            </div>
            <EventType addReminder={props.addReminder} eventType={props.eventType} handleChange={props.handleChange} reminders={props.reminders} />
        </div>
    )
}

export default Reminders;
