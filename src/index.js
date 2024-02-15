import React from "react";
import { createRoot } from "react-dom/client";
import RegistrationComponent from "./RegistrationComponent";


const root = createRoot(document.getElementById("surveyElement"));
root.render(<RegistrationComponent />);