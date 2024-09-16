describe('Disable Keyboard Shortcut', () => {
    it('Turn Off Keyboard Shortcut for Dark Mode', () => {
        cy.login();
        cy.visit(Cypress.env('WP_PLUGIN_SETTINGS_URL'));

        cy.get('a.accessibility-link').click();
        cy.get('div.bg-blue-600').find('span.bg-white').click(); // Disable keyboard shortcut
        cy.contains('button', 'Save Changes').click();
    })
});
