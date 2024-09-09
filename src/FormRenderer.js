// src/FormRenderer.js
import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { PersonalInformationPanel } from './PersonalInformationPanel';
import { ContactInformationPanel } from './ContactInformationPanel';
import { EmergencyContactPanel } from './EmergencyContactPanel';
import { InsuranceInformationPanel } from './InsuranceInformationPanel';
import { json } from './json'; // Import your JSON configuration

const renderElement = (element) => {
  if (typeof element === 'object' && element.type === 'file') {
    return <input type="file" />;
  }

  switch (element) {
    case PersonalInformationPanel:
      return <PersonalInformationPanel />;
    case ContactInformationPanel:
      return <ContactInformationPanel />;
    case EmergencyContactPanel:
      return <EmergencyContactPanel />;
    case InsuranceInformationPanel:
      return <InsuranceInformationPanel />;
    default:
      return null;
  }
};

const FormRenderer = () => {
  const { authState, oktaAuth } = useOktaAuth();

  React.useEffect(() => {
    if (!authState.isAuthenticated) {
      oktaAuth.signInWithRedirect();
    }
  }, [authState, oktaAuth]);

  const { pages } = json; // Use the configuration from json.js

  if (!authState.isAuthenticated) {
    return <div>Loading...</div>; // Show a loading message or spinner
  }

  return (
    <div>
      {pages.map((page, index) => (
        <div key={index}>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          {page.elements.map((element, i) => (
            <div key={i}>
              {renderElement(element)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FormRenderer;
