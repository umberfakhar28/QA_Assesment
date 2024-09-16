describe('WP Dark Mode Plugin Setup', () => {
  it('Check if WP Dark Mode Plugin is Active or Install and Activate it', () => {
      cy.login(); // Custom command for login
      cy.visit(Cypress.env('WP_PLUGIN_URL')); // Go to plugin page

      // Ensure the plugin list is loaded before searching
      cy.get('#the-list').then(($list) => {
          if ($list.text().includes('WP Dark Mode')) {
              // Plugin is listed
              cy.get('#the-list > tr')
                  .filter('[data-slug="wp-dark-mode"]')
                  .then(($row) => {
                      if ($row.hasClass('inactive')) {
                          // Activate the plugin if inactive
                          cy.contains('WP Dark Mode').parent().find('a.activate').click();
                      }
                  });
          } else {
              // Plugin is not installed, proceed to install it
              cy.visit(Cypress.env('WP_PLUGIN_INSTALL_URL'));
              cy.get('input#search-plugins').type('WP Dark Mode{enter}');
              cy.get('a.install-now[data-slug="wp-dark-mode"]').click();
              cy.wait(12000);
              // cy.contains('WP Dark Mode').parent().find('button.install-now').click();
              cy.get('a.activate-now[data-slug="wp-dark-mode"]').click();
              // cy.contains('WP Dark Mode').parent().find('button.activate-now').click();
          }
      });
      it('Activate Admin Dashboard Dark Mode', () => {
        cy.login(); // Custom command for login
        cy.visit(Cypress.env('WP_PLUGIN_SETTINGS_URL')); // Visit WP Dark Mode settings page
        cy.contains('h4', 'Controls').click(); // Go to the Controls section
        cy.contains('a.nav-item-child', 'Admin Panel Dark Mode').click();
        cy.get('div.relative.w-10').click();
        cy.get('div.relative.w-10').click().should('have.class', 'bg-slate-200');
        cy.get('button.save-settings').click(); // Save settings
        cy.contains('button', 'Save Changes').click();
        // Verify if dark mode is active in the admin dashboard
        cy.get('body').should('have.class', 'wp-dark-mode-active');
    });
  });
});
