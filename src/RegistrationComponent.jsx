import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import "./index.css";
import { json } from "./json";

function RegistrationComponent() {
    const survey = new Model(json);
    survey.applyTheme(themeJson);

    survey.onComplete.add((sender) => {
        const surveyData = sender.data;


        const apiUrl = 'http://127.0.0.1:8000/register_patient/';

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyData),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log("Success:", data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    return <Survey model={survey} />;
}

export default RegistrationComponent;