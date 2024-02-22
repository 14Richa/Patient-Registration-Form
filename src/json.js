import { PersonalInformationPanel } from "./PersonalInformationPanel";
import {ContactInformationPanel} from "./ContactInformationPanel";
import {EmergencyContactPanel} from "./EmergencyContactPanel";
import {InsuranceInformationPanel} from "./InsuranceInformationPanel";

export const json = {
    "logo": "https://raw.githubusercontent.com/14Richa/testga/main/uclhLogo1.png",
    "logoWidth": "auto",
    "logoHeight": "96",
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