import React/* , { Component } */ from 'react';
import { htmlHead, htmlClose, header, contentClose, hero, showroom, factory, theater, sunRoom, quietRoom, situationRoom, cornerOffice, meetingHeader, newsHeader, testimonialHeader, remindersHeader, } from './markup';

const Preview = (props) => {
    const quote = `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><h2 style="color:#F57E4D; font-size:16px; font-weight:700;">${props.state.quoteTitle}</h2><p style="font-size:15px;">${props.state.quote}</p><p style="font-size:15px;">- ${props.state.quoteAttribution}</p><p style="font-size:12px; font-style:italic;">Photo: ${props.state.photographer}</p></td></tr>`;

    const output =`${header}${props.state.date}${props.state.weather}${hero}${quote}${meetingHeader}${showroom}${factory}${theater}${sunRoom}${quietRoom}${situationRoom}${cornerOffice}${newsHeader}${testimonialHeader}${remindersHeader}${contentClose}`

    return (
        <div className="preview" dangerouslySetInnerHTML={{__html: output}} />
    )
}

export default Preview;