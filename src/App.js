import React from 'react';
import { Security, LoginCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormRenderer from './FormRenderer';

const App = () => {
  // Check if oktaConfig is loaded

  const oktaConfig = {
    issuer: 'https://dev-56861500.okta.com/oauth2/default',
    clientId: '0oajijlhx8pogQNEu5d7',
    redirectUri: `${window.location.origin}/callback`,
    scopes: ['openid', 'profile', 'email'],
  };
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
