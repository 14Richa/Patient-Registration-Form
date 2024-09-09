// src/App.js
import React from 'react';
import { Security, LoginCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormRenderer from './FormRenderer';
import oktaConfig from '../oktaConfig'; // Import your Okta config

const App = () => {
  return (
    <Router>
      <Security {...oktaConfig}>
        <div>
          <Switch>
            <Route path='/callback' component={LoginCallback} />
            <Route path='/' exact component={FormRenderer} />
            {/* Add other routes as needed */}
          </Switch>
        </div>
      </Security>
    </Router>
  );
};

export default App;
