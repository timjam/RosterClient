const Auth = {
  authenticated: false,
  isAuthenticated: function() { return this.authenticated },
  signIn: function() { this.authenticated = true },
  signOut: function() { this.authenticated = false },
};

export default Auth;
