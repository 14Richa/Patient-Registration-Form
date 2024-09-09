import React from 'react';
import { Security, LoginCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormRenderer from './FormRenderer';
import oktaConfig from '../oktaConfig';

const App = () => {
  // Check if oktaConfig is loaded
  console.log('Okta Config:', oktaConfig);

  return (
    <Router>
      <Security {...oktaConfig}>
        <div>
          <Switch>
            <Route path='/callback' component={LoginCallback} />
            <Route path='/' exact component={FormRenderer} />
          </Switch>
        </div>
      </Security>
    </Router>
  );
};

export default App;
