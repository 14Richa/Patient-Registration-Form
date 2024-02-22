export const PersonalInformationPanel = {
        "type": "panel",
        "name": "personal-information",
        "elements": [
          {
            "type": "text",
            "name": "name",
            "width": "50%",
            "minWidth": "256px",
            "title": "First Name",
            "onInputClick": "name"
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
            "name": "status",
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
      
}