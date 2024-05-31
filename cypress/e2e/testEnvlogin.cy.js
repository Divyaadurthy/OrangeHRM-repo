describe.only('Login functionality Orange HRM', () => {
    it.only('Verify login with Valid credentials', () => {
      //cy.viewport('iphone-5')
      cy.visit('/web/index.php/auth/login')
      cy.get('input[name="username"]').type(Cypress.env('username'))
      cy.get('input[type="password"]').type(Cypress.env('password'))
      cy.get('button[type="submit"]').click()

    })
});