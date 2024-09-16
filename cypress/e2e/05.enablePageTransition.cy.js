describe('Enable Page Transition Animation', () => {
    it('Activate Page Transition Animation and Change Effect', () => {
        cy.login();
        cy.visit(Cypress.env('WP_PLUGIN_SETTINGS_URL'));

        cy.get('a[href="#/animation"]').click();
        cy.get('div.bg-slate-200').click(); // Enable Page Transition Animation
        cy.contains('button', 'Save Changes').click();
    });
});
