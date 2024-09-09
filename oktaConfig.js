const oktaConfig = {
    issuer: 'https://dev-56861500.okta.com/oauth2/default',
    clientId: '0oajijlhx8pogQNEu5d7',
    redirectUri: `${window.location.origin}/callback`,
    scopes: ['openid', 'profile', 'email'],
  };

  export default oktaConfig;
