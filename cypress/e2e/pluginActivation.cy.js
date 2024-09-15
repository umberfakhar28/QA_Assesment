describe('WP Dark Mode Plugin Activation', () => {
    it('Check if WP Dark Mode plugin is active', () => {
      cy.login({setTimeout:10000}); // Login using the custom command;
      cy.get('#wp-has-submenu toplevel_page_wp-dark-mode ').click();
      // cy.visit('https://umberfakhar.xyz/wp-admin/plugins.php');
      // cy.get('#the-list').contains('WP Dark Mode').then($plugin => {
      //   if ($plugin.find('.activate').length) {
      //     cy.wrap($plugin).contains('Activate').click();
      //     cy.wrap($plugin).should('contain', 'Deactivate');
      //   } else {
      //       // If already active, assertion to check if it shows "Deactivate"
      //       cy.wrap($plugin).should('contain', 'Deactivate');
      //   }
      });
    });
  // })