const htmlHead = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xml:lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html;"/><title></title><style type="text/css">body{margin:0;}img{display:inline-block;}a{text-decoration:none;}.addressLink a{color:#989A9C!important; text-decoration:none!important;}</style><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body style="padding:0;">`;
const htmlClose = `</body></html>`;

const header = `<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FFFFFF; color:#000000; font-family:Arial, sans-serif; font-size:20px; width:100%;"><tbody><tr><td> <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="550" style="min-width:550px; width:550px;"><tbody> <tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><div style="height:38px; line-height:38px;">&nbsp;</div><a title="Lavidge.com" href="http://www.lavidge.com/" target="_blank"><img alt="Lavidge" border="0" src="http://CustomerWebData.goolara.net/lavidge/assets/logo.png" align="top" height="66" width="149" style="color:#F57E4D; display:block; height:66px; width:149px;"/></a></td></tr><tr><td><div height="18" style="height:18px; line-height:18px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table><div height="18" style="height:18px; line-height:18px;">&nbsp;</div></td></tr>`;
const contentClose = `</tbody></table></td></tr></tbody></table>`;

const date = `<tr><td align="center" valign="top" width="550" style="color:#999999; font-family:Arial,sans-serif; font-size:18px; font-weight:100; min-width:550px; width:550px;"> <p style="padding:0; margin:0;">Wednesday, November 1, 2017</p><div height="16" style="font-size:16px; height:16px; line-height:16px;">&nbsp;</div></td></tr>`;
const weather = `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-left:24px"> <tbody> <tr> <td align="right" height="26" width="25" style="border-right:1px solid #999999; font-size:26px; height:26px; line-height:26px; padding-right:16px;"> <img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/sunny_icon_25x26.png" alt="sunny"> </td><td height="26" width="13" style="font-size:26px; height:26px; line-height:26px; padding-left:16px;"> <img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/thermometer_icon_13x26.png" alt=""> </td><td style="color:#777777; font-size:18px; padding-left:8px;"> 88&deg; </td></tr></tbody> </table> <div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div></td></tr>`;
const hero = `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><a href="http://www.lavidge.com/" target="_blank"><img alt="Chris Rock" border="0" src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/hero_image_511x322.png" align="top" style="display:block;"/></a><div style="height:23px; line-height:23px;">&nbsp;</div></td></tr>`;
const quote = `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><h2 style="color:#F57E4D; font-size:16px; font-weight:700;">Taking it Seriously</h2><p style="font-size:15px;">Anything you suck at should make you nervous.</p><p style="font-size:15px;">- Chris Rock</p><p style="font-size:12px; font-style:italic;">Photo: Ricardo DeAratahna, Los Angeles Times</p></td></tr>`;
const meetingHeader = `</tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/calander_icon_26x23.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic;" >Today at a Glance</h2></td></tr></tbody></table></td></tr>`;

const showroom = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/showroom_icon_23x27.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#6D8AC4; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Showroom</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';
const showroomObj = { icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/showroom_icon_23x27.png', color: '#6D8AC4', name: 'The Showroom', }
const factory = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/factory_icon_27x28.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#B8D03F; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Factory</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';
const theater = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/theater_icon_25x31.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#F47C4B; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Theater</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';
const sunRoom = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/sunroom_icon_23x25.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#C95E62; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Sun Room</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';
const quietRoom = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/quietroom_icon_25x21.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#50BCBC; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Quiet Room</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';
const situationRoom = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/situation_icon_16x22.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#6D8AC4; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Situation Room</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';
const cornerOffice = '</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/corner_icon_19x19.png" alt=""/></td><td style="padding-left:8px;"><h2 style="color:#B8D03F; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">The Corner Office</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>';

const newsHeader = '</tbody></table><div style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="450" style="min-width:450px; width:450px"><tbody><tr><td><div height="48" style="height:48px; line-height:48px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/megaphone_icon_31x21.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic;" >3rd Floor News</h2></td></tr></tbody></table><div height="18" style="font-size:18px; height:18px; line-height:18px;">&nbsp;</div></td></tr>';

const testimonialHeader = '</tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><div height="18" style="height:18px; line-height:18px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table><div height="64" style="height:64px; line-height:64px;">&nbsp;</div></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/colorwheel_icon_20x20.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic; margin:0;" >Become Indespensible</h2></td></tr></tbody></table></td></tr><tr><td align="center"><div height="12" style="height:12px; line-height:12px;">&nbsp;</div><h3 style="color:#888888; font-family:Arial,sans-serif; font-size:14px; font-weight:700; margin:0;">Reduce Client Stress Today</h3><div height="16" style="height:16px; line-height:16px;">&nbsp;</div></td></tr>';

const remindersHeader = '</tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><div height="32" style="height:32px; line-height:32px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table><div height="100" style="height:100px; line-height:100px;">&nbsp;</div></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" width="500"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/reminder_icon_22x34.png" alt=""/></td><td style="padding-left:8px"><h2 style="color:#F57E4D; font-family:Arial,sans-serif; font-size:18px; font-style:italic; margin:0;" >Reminders</h2></td></tr></tbody></table></td></tr>';

export {
    htmlHead,
    htmlClose,
    header,
    contentClose,
    date,
    weather,
    hero,
    quote,
    meetingHeader,
    showroom,
    factory,
    theater,
    sunRoom,
    quietRoom,
    situationRoom,
    cornerOffice,
    newsHeader,
    testimonialHeader,
    remindersHeader,
    meetingRoomArr,
}


/* const meetingRoom = `</tbody></table><div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0" width="500" style="min-width:500px; width:500px;"><tbody><tr><td align="center" bgcolor="#ECECEC" valign="top" width="500" style="background-color:#ECECEC; min-width:500px; width:500px;"><div style="height:12px; line-height:12px;">&nbsp;</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td><img src="${obj.icon}" alt=""/></td><td style="padding-left:8px;"><h2 style="color:${obj.color}; font-family:Arial,sans-serif; font-size:18px; font-style:italic; line-height:18px; margin:0;">${obj.name}</h2></td></tr></tbody></table><div style="height:12px; line-height:12px;">&nbsp;</div></td></tr>`;
 */
const meetingRoomArr = [
    { 
        icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/showroom_icon_23x27.png', 
        color: '#6D8AC4', 
        name: 'The Showroom', 
    },
    { 
        icon:'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/factory_icon_27x28.png', 
        color: '#B8D03F', 
        name: 'The Factory' 
    },
    { 
        icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/theater_icon_25x31.png', 
        color: '#F47C4B', 
        name: 'The Theater' 
    },
    { 
        icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/sunroom_icon_23x25.png', 
        color: '#C95E62', 
        name: 'The Sun Room' 
    },
    { 
        icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/quietroom_icon_25x21.png', 
        color: '#50BCBC', 
        name: 'The Quiet Room' 
    },
    { 
        icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/situation_icon_16x22.png', 
        color: '#6D8AC4', 
        name: 'The Situation Room' 
    },
    { 
        icon: 'http://CustomerWebData.goolara.net/lavidge/2018MorningMail/corner_icon_19x19.png', 
        color: '#B8D03F', 
        name: 'The Corner Office' 
    },
];
