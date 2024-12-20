import envConfig from "../config/env.config";

const WELCOME_EMAIL = (
  fullName: string,
  verificationToken: string
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
</head>
<div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Your all-in-one Link Hub.<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
</div>

<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
        <tbody>
            <tr style="width:100%">
                <td>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Hi ${fullName},</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Welcome to ${envConfig.PROJECT_NAME}, your favourite all-in-one link hub. Seamlessly manage your social links, improve sales and metrics faster.</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Please verify your email address by clicking the button below. This link will expire in 1 hour.</p>
                    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center">
                        <tbody>
                            <tr>
                                <td><a href="${envConfig.BASE_URL}/verify-email/${verificationToken}" style="line-height:100%;text-decoration:none;display:block;max-width:100%;mso-padding-alt:0px;background-color:#5F51E8;border-radius:3px;color:#fff;font-size:16px;text-align:center;padding:12px 12px 12px 12px" target="_blank"><span><!--[if mso]><i style="mso-font-width:300%;mso-text-raise:18" hidden>&#8202;&#8202;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Verify Email</span><span><!--[if mso]><i style="mso-font-width:300%" hidden>&#8202;&#8202;&#8203;</i><![endif]--></span></a></td>
                            </tr>
                        </tbody>
                    </table>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />${envConfig.PROJECT_NAME}</p>
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                    <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">1907, AMAC, FCT, Abuja, NG.</p>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`;

const ACCOUNT_UPDATE_NOTIFICATION_EMAIL = (
  fullName: string
) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
</head>
<div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Account Update Notification<div>

<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
        <tbody>
            <tr style="width:100%">
                <td>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Hi ${fullName},</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">We noticed that you recently updated your account details on ${envConfig.PROJECT_NAME}. This email is to confirm that your changes have been successfully saved.</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">If you did not make these changes, please contact our support team immediately.</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />${envConfig.PROJECT_NAME}</p>
                    <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                    <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">1907, AMAC, FCT, Abuja, NG.</p>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`;

const emailTemplate = {
  WELCOME_EMAIL,
  ACCOUNT_UPDATE_NOTIFICATION_EMAIL,
};

export default emailTemplate;
