import { PersonalInformationPanel } from "./PersonalInformationPanel";
import {ContactInformationPanel} from "./ContactInformationPanel";
import {EmergencyContactPanel} from "./EmergencyContactPanel";
import {InsuranceInformationPanel} from "./InsuranceInformationPanel";

const oktaConfig = {
  issuer: 'https://dev-56861500.okta.com/oauth2/default',
  clientId: '0oajijlhx8pogQNEu5d7',
  redirectUri: `${window.location.origin}/callback`,
  scopes: ['openid', 'profile', 'email'],
};
console.log('Okta Config:', oktaConfig);


export const json = {
    "logo": "https://raw.githubusercontent.com/14Richa/testga/main/logo-png.png",
    "logoWidth": "auto",
    "logoHeight": "96",
    "completedHtml": "<div style=\"max-width:540px;text-align:left;margin:0px auto 16px auto;border: 1px solid rgba(0,0,0,0.25);padding:40px 48px 48px 48px;background-color:#fff;\">\n\n<h4>Thank you for completing your registration form.</h4>\n<br>\n<p>Dear {firstname-for-complete-page},\n<br>\nWe've successfully received your details and are excited to deliver the highest standard of service.\n<br><br>\n If you need any assistance or want to arrange an appointment, please feel free to get in touch with our office. Our staff is committed to guiding you at every step.\n<br><br>\nWarm regards,\n<br>\nUniversity Hospital</p>\n\n</div>",

    "pages": [
        {
            "title": "Patient Registration Form",
            "description": "We value your privacy. Any information provided via our forms or other communications is protected under our Patient Privacy Policy.",

            "name": "page1",
            "elements": [
              PersonalInformationPanel,
              {
                "type": "file",
                "name": "photo",
                "width": "31%",
                "imageWidth": "532",
                "imageHeight": "576",
                "minWidth": "256px",
                "startWithNewLine": false,
                "titleLocation": "hidden",
                "sourceType": "camera",
                "photoPlaceholder": " "
              },
              ContactInformationPanel,
              EmergencyContactPanel,
              InsuranceInformationPanel



            ]
          }
    ],
    "calculatedValues": [{
      "name": "firstname-for-complete-page",
      "expression": "iif({name} notempty, {name}, patient)"
    }],
    "showQuestionNumbers": "off",
    "questionErrorLocation": "bottom",
    "completeText": "Register",
    "questionsOnPageMode": "singlePage",
    "widthMode": "static",
    "width": "1024",
    "fitToContainer": true,

}