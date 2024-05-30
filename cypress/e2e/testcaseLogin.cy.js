import data from '../fixtures/admin/login.json'
//Testcases for valid username and password
describe.only('Login functionality Orange HRM', () => {
  it('Verify login with Valid credentials', () => {
    //cy.viewport('iphone-5')
    cy.visit(
      '/web/index.php/auth/login',
    )
    cy.get('input[name="username"]').type(data.username)
    cy.get('input[type="password"]').type(data.password)
    cy.get('button[type="submit"]').click()
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    )
    cy.contains('Dashboard').should('be.visible')
  })
  // Testcase for valid username and invalid password

  it('Verify login with Valid username and invalid password', () => {
    cy.visit(
      '/web/index.php/auth/login',
    )

    cy.get('input[name="username"]').type(data.username)

    cy.get('input[type="password"]').type('kerfhyuerhuio')

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
  })

  // Testcases for invalid name & valid password
  it('Verify login with InValid username and valid password', () => {
    cy.visit(
      '/web/index.php/auth/login',
    )

    cy.get('input[name="username"]').type('yhfuerhfyu')

    cy.get('input[type="password"]').type(data.password)
    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('Verify login with InValid username and INvalid password', () => {
    cy.visit(
      '/web/index.php/auth/login',
    )

    cy.get('input[name="username"]').type('yhfuerhfyu')

    cy.get('input[type="password"]').type('erugtuy')

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should('be.visible')
  })
})

