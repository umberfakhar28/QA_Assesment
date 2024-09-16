describe('Customize Floating Switch Style and Size', () => {
    it('Change Floating Switch Style and Switch Size', () => {
        cy.login();
        cy.visit(Cypress.env('WP_PLUGIN_SETTINGS_URL'));

        // Navigate to Switch Settings
        cy.get(".wp-dark-mode-admin-sidebar-header-button").click();
        // cy.get('svg.wp-dark-mode-admin-sidebar-header-button-logo').click();
        cy.contains('h4', 'Customization').click();
        cy.contains('a', 'Switch Settings').click();
        cy.get('div._selected.bg-[#F9FAFB]').click();
        cy.contains('button', 'Save Changes').click();
        // Set Custom Switch Size
        cy.contains('span', 'Custom').click(); // Enable Custom Switch size
        cy.get('input[type="range"]').invoke('val', 220).trigger('input'); 
        cy.contains('button', 'Save Changes').click();

        // floating settings to left 
        cy.contains('span', 'Left').click();
        cy.contains('button', 'Save Changes').click();

    })
})
