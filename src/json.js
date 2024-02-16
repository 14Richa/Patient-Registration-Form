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
              {
                "type": "panel",
                "name": "personal-information",
                "elements": [
                  {
                    "type": "text",
                    "name": "first-name",
                    "width": "50%",
                    "minWidth": "256px",
                    "title": "First Name"
                  },
                  {
                    "type": "text",
                    "name": "last-name",
                    "width": "50%",
                    "minWidth": "256px",
                    "startWithNewLine": false,
                    "title": "Last Name"
                  },
                  {
                    "type": "text",
                    "name": "birthdate",
                    "width": "50%",
                    "minWidth": "256px",
                    "startWithNewLine": false,
                    "title": "Date of Birth",
                    "inputType": "date"
                  },
                  {
                    "type": "dropdown",
                    "name": "marital-status",
                    "width": "50%",
                    "minWidth": "256px",
                    "title": "Marital Status",
                    "choices": [ "Single", "Married", "Widowed", "Separated" ],
                    "choicesOrder": "random",
                    "placeholder": "",
                    "allowClear": false
                  },
                  {
                    "type": "dropdown",
                    "name": "gender",
                    "width": "50%",
                    "minWidth": "256px",
                    "startWithNewLine": false,
                    "title": "Gender",
                    "choices": [ "Male", "Female" ],
                    "choicesOrder": "random",
                    "placeholder": "",
                    "allowClear": false
                  }
                ],
                "width": "69%",
                "minWidth": "256px"
              },
            
            ]
          }
    ],

}