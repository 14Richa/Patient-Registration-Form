export const InsuranceInformationPanel = {

        "type": "panel",
        "name": "insurance",
        "elements": [
          {
            "type": "dropdown",
            "name": "insurance-company",
            "width": "66%",
            "minWidth": "256px",
            "title": "Insurance Company",
            "choices": [ "Bupa", "Aviva", "AXA Health", "Hiscox", "Zurich Insurance plc (UK)" ],
            "choicesOrder": "random",
            "placeholder": "",
            "allowClear": false
          },
          {
            "type": "text",
            "name": "insurance-policy-number",
            "width": "34%",
            "minWidth": "128px",
            "startWithNewLine": false,
            "title": "Policy"
          },
          {
            "type": "radiogroup",
            "name": "insurance-policyholder",
            "width": "100%",
            "minWidth": "256px",
            "title": "Policyholder",
            "defaultValue": "Personal",
            "choices": [ "Personal", "Other" ],
            "colCount": 0
          },
          {
            "type": "text",
            "name": "policyholder-name",
            "visibleIf": "{insurance-policyholder} = 'Other'",
            "width": "66%",
            "minWidth": "256px",
            "title": "Holder Name"
          },
          {
            "type": "dropdown",
            "name": "policyholder-relationship",
            "visibleIf": "{insurance-policyholder} = 'Other'",
            "width": "34%",
            "minWidth": "128px",
            "startWithNewLine": false,
            "title": "Relationship",
            "choicesFromQuestion": "emergency-contact-relationship",
            "choicesOrder": "random",
            "placeholder": "",
            "allowClear": false
          },
          {
            "type": "text",
            "name": "policyholder-birthdate",
            "visibleIf": "{insurance-policyholder} = 'Other'",
            "width": "34%",
            "minWidth": "128px",
            "title": "Date of Birth",
            "inputType": "date"
          },
          {
            "type": "text",
            "name": "policyholder-ssn",
            "visibleIf": "{insurance-policyholder} = 'Other'",
            "width": "32%",
            "minWidth": "128px",
            "startWithNewLine": false,
            "title": "Social Security #"
          },
          {
            "type": "text",
            "name": "policyholder-phone",
            "visibleIf": "{insurance-policyholder} = 'Other'",
            "width": "34%",
            "minWidth": "128px",
            "startWithNewLine": false,
            "title": "Phone"
          },
          {
            "type": "comment",
            "name": "policyholder-address",
            "visibleIf": "{insurance-policyholder} = 'Other'",
            "width": "100%",
            "minWidth": "256px",
            "title": "Address",
            "autoGrow": true,
            "allowResize": false
          }
        ],
        "title": "Insurance Information",
        "width": "100%",
        "minWidth": "256px"
   
}