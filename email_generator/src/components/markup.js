const htmlHead = { content: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xml:lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><meta http-equiv="Content-Type" content="text/html;"/><title></title><style type="text/css">body{margin:0;}img{display:inline-block;}a{text-decoration:none;}.addressLink a{color:#989A9C!important; text-decoration:none!important;}</style><!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--></head><body style="padding:0;">`};
const htmlClose = { content: `</body></html>` };

const header = { content: `<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#FFFFFF; color:#000000; font-family:Arial, sans-serif; font-size:20px; width:100%;"><tbody><tr><td> <table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="550" style="min-width:550px; width:550px;"><tbody> <tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><div style="height:38px; line-height:38px;">&nbsp;</div><a title="Lavidge.com" href="http://www.lavidge.com/" target="_blank"><img alt="Lavidge" border="0" src="http://CustomerWebData.goolara.net/lavidge/assets/logo.png" align="top" height="66" width="149" style="color:#F57E4D; display:block; height:66px; width:149px;"/></a></td></tr><tr><td><div height="18" style="height:18px; line-height:18px;">&nbsp;</div><table align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="center" valign="top" width="250" style="border-bottom:1px solid #CACACA; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; mso-line-height-rule:exactly; line-height:1px;"></td></tr></tbody></table><div height="18" style="height:18px; line-height:18px;">&nbsp;</div></td></tr>` };
const contentClose = { content: `</tbody></table></td></tr></tbody></table>`}

const date = { content: `<tr><td align="center" valign="top" width="550" style="color:#999999; font-family:Arial,sans-serif; font-size:18px; font-weight:100; min-width:550px; width:550px;"> <p style="padding:0; margin:0;">Wednesday, November 1, 2017</p><div height="16" style="font-size:16px; height:16px; line-height:16px;">&nbsp;</div></td></tr>` };
const weather = { content: `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-left:24px"> <tbody> <tr> <td align="right" height="26" width="25" style="border-right:1px solid #999999; font-size:26px; height:26px; line-height:26px; padding-right:16px;"> <img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/sunny_icon_25x26.png" alt="sunny"> </td><td height="26" width="13" style="font-size:26px; height:26px; line-height:26px; padding-left:16px;"> <img src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/thermometer_icon_13x26.png" alt=""> </td><td style="color:#777777; font-size:18px; padding-left:8px;"> 88&deg; </td></tr></tbody> </table> <div height="24" style="font-size:24px; height:24px; line-height:24px;">&nbsp;</div></td></tr>` };
const hero = { content: `<tr><td align="center" valign="top" width="550" style="min-width:550px; width:550px;"><a href="http://www.lavidge.com/" target="_blank"><img alt="Chris Rock" border="0" src="http://CustomerWebData.goolara.net/lavidge/2018MorningMail/hero_image_511x322.png" align="top" style="display:block;"/></a><div style="height:23px; line-height:23px;">&nbsp;</div></td></tr>` };
const quote = { content: `<tr><td align="center" valign="top" width="550" style="color:#555555; font-family:Arial,sans-serif; min-width:550px; width:550px;"><h2 style="color:#F57E4D; font-size:16px; font-weight:700;">Taking it Seriously</h2><p style="font-size:15px;">Anything you suck at should make you nervous.</p><p style="font-size:15px;">- Chris Rock</p><p style="font-size:12px; font-style:italic;">Photo: Ricardo DeAratahna, Los Angeles Times</p></td></tr>` };

export {
    htmlHead,
    htmlClose,
    header,
    contentClose,
    date,
    weather,
    hero,
    quote,
}
