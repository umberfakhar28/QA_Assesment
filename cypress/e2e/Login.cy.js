describe('WP Dark Mode Plugin Activation', () => {
    it('Login to WP', () => {
      cy.login({setTimeout:10000}); // Login using the custom command
    //   cy.visit('https://umberfakhar.xyz/wp-admin');
    })
});