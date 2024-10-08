// import { PersonalInformationPanel } from "./PersonalInformationPanel";
// import {ContactInformationPanel} from "./ContactInformationPanel";
// import {EmergencyContactPanel} from "./EmergencyContactPanel";
// import {InsuranceInformationPanel} from "./InsuranceInformationPanel";
// import { OktaAuth } from '@okta/okta-auth-js';


// export const json = {
//   "logo": "https://raw.githubusercontent.com/14Richa/testga/main/logo-png.png",
//   "logoWidth": "auto",
//   "logoHeight": "96",
//   "completedHtml": "<div style=\"max-width:540px;text-align:left;margin:0px auto 16px auto;border: 1px solid rgba(0,0,0,0.25);padding:40px 48px 48px 48px;background-color:#fff;\">\n\n<h4>Thank you for completing your registration form.</h4>\n<br>\n<p>Dear {firstname-for-complete-page},\n<br>\nWe've successfully received your details and are excited to deliver the highest standard of service.\n<br><br>\n If you need any assistance or want to arrange an appointment, please feel free to get in touch with our office. Our staff is committed to guiding you at every step.\n<br><br>\nWarm regards,\n<br>\nUniversity Hospital</p>\n\n</div>",

//   "pages": [
//     {
//       "title": "Patient Registration Form",
//       "description": "We value your privacy. Any information provided via our forms or other communications is protected under our Patient Privacy Policy.",
//       "name": "page1",
//       "elements": [
//         PersonalInformationPanel,
//         {
//           "type": "file",
//           "name": "photo",
//           "width": "31%",
//           "imageWidth": "532",
//           "imageHeight": "576",
//           "minWidth": "256px",
//           "startWithNewLine": false,
//           "titleLocation": "hidden",
//           "sourceType": "camera",
//           "photoPlaceholder": " "
//         },
//         ContactInformationPanel,
//         EmergencyContactPanel,
//         InsuranceInformationPanel,
//         // Custom button to log oktaConfig
//         {
//           "type": "html",
//           "name": "logOktaConfigButton",
//           "html": "<button id='logOktaConfigButton'>Log Okta Config</button>"
//         }
//       ]
//     }
//   ],
//   "calculatedValues": [
//     {
//       "name": "firstname-for-complete-page",
//       "expression": "iif({name} notempty, {name}, patient)"
//     }
//   ],
//   "showQuestionNumbers": "off",
//   "questionErrorLocation": "bottom",
//   "completeText": "Register",
//   "questionsOnPageMode": "singlePage",
//   "widthMode": "static",
//   "width": "1024",
//   "fitToContainer": true,
// };

// const oktaConfig = {
//   issuer: 'https://dev-56861500.okta.com/oauth2/default',
//   clientId: '0oajijlhx8pogQNEu5d7',
//   redirectUri: window.location.origin + '/callback', // Ensure this matches your Okta app settings
//   scopes: ['openid', 'profile', 'email'],
//   pkce: true
// };

// // Initialize OktaAuth instance
// const oktaAuth = new OktaAuth(oktaConfig);

// document.addEventListener('DOMContentLoaded', async function() {
//   // Function to handle login
//   const login = async () => {
//     try {
//       // Redirect to Okta login page
//       await oktaAuth.signInWithRedirect();
//     } catch (err) {
//       console.error('Error during login:', err);
//     }
//   };

//   // Handle button click for redirecting to Okta login
//   document.getElementById('logOktaConfigButton')?.addEventListener('click', function() {
//     login(); // Use OktaAuth to handle login
//   });

//   // Check if we are on the callback route
//   if (window.location.pathname === '/callback') {
//     try {
//       // Handle Okta redirect callback
//       const tokens = await oktaAuth.handleRedirectCallback();

//       // Access the tokens
//       const { accessToken, idToken } = tokens;

//       // Print JWT tokens
//       console.log('Access Token:', accessToken.accessToken);
//       console.log('ID Token:', idToken.idToken);

//       // Use tokenManager to get tokens
//       const accessTokenFromManager = await oktaAuth.tokenManager.get('accessToken');
//       const idTokenFromManager = await oktaAuth.tokenManager.get('idToken');

//       console.log('Access Token from tokenManager:', accessTokenFromManager.accessToken);
//       console.log('ID Token from tokenManager:', idTokenFromManager.idToken);

//       // Redirect to the home page or any other page after successful login
//       window.location.href = '/'; // Change this if you want to redirect elsewhere
//     } catch (err) {
//       console.error('Error handling login redirect:', err);
//     }
//   }
// });

import { PersonalInformationPanel } from "./PersonalInformationPanel";
import { ContactInformationPanel } from "./ContactInformationPanel";
import { EmergencyContactPanel } from "./EmergencyContactPanel";
import { InsuranceInformationPanel } from "./InsuranceInformationPanel";
import { OktaAuth } from '@okta/okta-auth-js';

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
        InsuranceInformationPanel,
        {
          "type": "html",
          "name": "logOktaConfigButton",
          "html": "<button id='logOktaConfigButton'>Log Okta Config</button>"
        }
      ]
    }
  ],
  "calculatedValues": [
    {
      "name": "firstname-for-complete-page",
      "expression": "iif({name} notempty, {name}, patient)"
    }
  ],
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom",
  "completeText": "Register",
  "questionsOnPageMode": "singlePage",
  "widthMode": "static",
  "width": "1024",
  "fitToContainer": true,
};

// const oktaConfig = {
//   issuer: 'https://dev-56861500.okta.com/oauth2/default',
//   clientId: '0oajijlhx8pogQNEu5d7',
//   redirectUri: window.location.origin + '/callback',
//   scopes: ['openid', 'profile', 'email'],
//   pkce: true
// };

// const oktaAuth = new OktaAuth(oktaConfig);

// document.addEventListener('DOMContentLoaded', async () => {
//   // Function to handle login
//   const login = async () => {
//     try {
//       // Redirect to Okta login page
//       await oktaAuth.signInWithRedirect({
//         originalUri: window.location.origin + '/welcome.html' // Redirect here after login
//       });
//     } catch (err) {
//       console.error('Error during login:', err);
//     }
//   };

//   const logOktaConfigButton = document.getElementById('logOktaConfigButton');
//   if (logOktaConfigButton) {
//     logOktaConfigButton.addEventListener('click', login);
//   }

//   // Handle Okta redirect callback
//   if (window.location.pathname === '/callback') {
//     try {
//       const tokens = await oktaAuth.handleRedirectCallback();
//       const { accessToken, idToken } = tokens;

//       // Use tokenManager to get tokens
//       const accessTokenFromManager = await oktaAuth.tokenManager.get('accessToken');
//       const idTokenFromManager = await oktaAuth.tokenManager.get('idToken');

//       console.log('Access Token:', accessToken.accessToken);
//       console.log('ID Token:', idToken.idToken);
//       console.log('Access Token from tokenManager:', accessTokenFromManager.accessToken);
//       console.log('ID Token from tokenManager:', idTokenFromManager.idToken);

//       // Redirect to the welcome page after successful login
//       window.location.href = '/welcome.html';
//     } catch (err) {
//       console.error('Error handling login redirect:', err);
//     }
//   }
// });

// Initialize OktaAuth with your configuration

const oktaConfig = {
  issuer: 'https://dev-56861500.okta.com/oauth2/default',
  clientId: '0oajijlhx8pogQNEu5d7',
  redirectUri: `${window.location.origin}/redirect.html`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

const oktaAuth = new OktaAuth(oktaConfig);

document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('logOktaConfigButton');
  if (button) {
    button.addEventListener('click', async () => {
      try {
        await oktaAuth.signInWithRedirect();
      } catch (err) {
        console.error('Error during sign-in:', err);
      }
    });
  }
});

async function handleAuthentication() {
  try {
    const { tokens } = await oktaAuth.handleAuthentication();
    if (tokens) {
      document.getElementById('message').textContent = 'Hello';
    }
  } catch (err) {
    console.error('Error handling authentication:', err);
  }
}

if (window.location.pathname === '/redirect.html') {
  handleAuthentication();
}

