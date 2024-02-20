export const EmergencyContactPanel = {
    "type": "panel",
    "name": "emergency-contact",
    "elements": [
      {
        "type": "text",
        "name": "emergency-contact-full-name",
        "width": "66%",
        "minWidth": "256px",
        "title": "Full Name"
      },
      {
        "type": "dropdown",
        "name": "emergency-contact-relationship",
        "width": "34%",
        "minWidth": "128px",
        "startWithNewLine": false,
        "title": "Relationship",
        "choices": [ "Family Member", "Friend", "Partner", "Work Colleague" ], 
        "choicesOrder": "random",
        "placeholder": "",
        "allowClear": false
      },
      {
        "type": "text",
        "name": "emergency-contact-phone",
        "width": "34%",
        "minWidth": "128px",
        "title": "Phone"
      },
      {
        "type": "text",
        "name": "emergency-contact-address",
        "width": "66%",
        "minWidth": "256px",
        "startWithNewLine": false,
        "title": "Address"
      }
    ],
    "title": "Emergency Contact Information",
    "width": "100%",
    "minWidth": "256px"
  }