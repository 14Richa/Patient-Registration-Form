// src/FormRenderer.js
import React from 'react';
import { PersonalInformationPanel } from './PersonalInformationPanel';
import { ContactInformationPanel } from './ContactInformationPanel';
import { EmergencyContactPanel } from './EmergencyContactPanel';
import { InsuranceInformationPanel } from './InsuranceInformationPanel';
import { json } from './oktaConfig'; // Import your JSON config

const renderElement = (element) => {
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
  const { pages } = json;

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
