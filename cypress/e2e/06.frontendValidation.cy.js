describe('Front-end Dark Mode Validation', () => {
  beforeEach(() => {
    cy.login();
    // cy.on('uncaught:exception', (err, runnable) => {
    //   // Ignore the ResizeObserver error
    //   if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    //     return false; // Prevent Cypress from failing the test
    //   }
    //   return true; // Let Cypress handle other exceptions
    // });
  });

  it('Validate Dark Mode on Front-end', () => {
    cy.visit(Cypress.env('WP_DASHBOARD_URL'));

    // Click the link and verify redirection
    cy.contains('a.ab-item', 'Umber Fakhar').click();

    // Wait for the redirection to complete and verify the URL
    cy.url().should('eq', 'https://umberfakhar.xyz/');
    cy.get('div.wp-dark-mode-floating-switch').click();
      // Optionally, you may want to wait for some time to ensure the state has been applied
      cy.wait(1000); // Adjust time if necessary
      cy.get('div.wp-dark-mode-switch-styled')
      .should('have.class', 'active');

});
})
