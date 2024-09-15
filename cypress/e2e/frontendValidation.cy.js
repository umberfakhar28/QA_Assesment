describe('Front-end Dark Mode Validation', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('Validate Dark Mode on Front-end', () => {
      cy.visit(Cypress.env('WORDPRESS_DASHBOARD_URL'));
      cy.get('body').should('have.class', 'dark-mode');
    });
  });
  