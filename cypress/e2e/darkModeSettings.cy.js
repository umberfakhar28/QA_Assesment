describe('WP Dark Mode Settings', () => {
    beforeEach(() => {
      cy.login();
      cy.visit(Cypress.env('WORDPRESS_DASHBOARD_URL'));
    });
  
    it('Enable Admin Dashboard Dark Mode', () => {
      cy.visit(`${Cypress.env('WORDPRESS_DASHBOARD_URL')}/admin.php?page=wp-dark-mode-settings`);
      cy.get('#admin_darkmode').check();
      cy.get('.button-primary').contains('Save Settings').click();
    });
  
    it('Change Floating Switch Style and Switch Customization', () => {
      cy.visit(`${Cypress.env('WORDPRESS_DASHBOARD_URL')}/admin.php?page=wp-dark-mode-customization`);
      cy.get('#floating_switch_style').select('new_style');
      cy.get('#switch_scale').clear().type('220');
      cy.get('#switch_position').select('Left');
      cy.get('.button-primary').contains('Save Settings').click();
    });
  
    it('Disable Keyboard Shortcut', () => {
      cy.visit(`${Cypress.env('WORDPRESS_DASHBOARD_URL')}/admin.php?page=wp-dark-mode-accessibility`);
      cy.get('#disable_keyboard_shortcut').check();
      cy.get('.button-primary').contains('Save Settings').click();
    });
  });
  