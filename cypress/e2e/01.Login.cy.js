
describe('WP Dark Mode Plugin Activation', () => {
    it('Login to WP', () => {
      cy.login();
      cy.url().should('contains', "/wp-admin/")
    })
});