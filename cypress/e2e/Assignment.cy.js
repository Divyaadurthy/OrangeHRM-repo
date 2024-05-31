import logindata from '../fixtures/admin/login.json'
import jobdata from '../fixtures/admin/jobtitle.json'

describe.only('Admin Funtionality', () => {
  it(' Verify Adding Job with Valid Data', () => {
    // cy.viewport('ipad-2')
    //Login in to the Website
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type(logindata.username)
    cy.get('input[type="password"]').type(logindata.password)
    cy.get('button[type="submit"]').click()
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    )

    // Click on Admin & Add Job Titles
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.contains('Job').click()
    cy.contains('Job Titles').click()
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList',
    )

    //  Validating Toast Success message

    cy.contains('Add').click()
    let randomText = (Math.random() + 1).toString(36).substring(7)
    cy.get(':nth-child(2) > .oxd-input')
      .click()
      .type(jobdata.jobtitle + randomText)
    cy.get("textarea[placeholder='Type description here']")
      .click()
      .type(jobdata.jobdescription)

    cy.get("textarea[placeholder='Add note']").click().type(jobdata.jobNotes)
    cy.get("button[type='submit']").click()

    cy.contains('Success').should('be.visible')
  })

  it('Verify Adding Pay Grades with Valid Data', () => {
    //Login in to the Website
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type(logindata.username)
    cy.get('input[type="password"]').type(logindata.password)
    cy.get('button[type="submit"]').click()

    //Click on Admin Pay grades

    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    )
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.contains('Job').click()
    cy.contains('Pay Grades').click()

    // Enter Data for Pay Grades

    cy.contains('Add').click()
    let randomText = (Math.random() + 1).toString(36).substring(7)
    cy.get(':nth-child(2) > .oxd-input')
      .click()
      .type(jobdata.jobtitle + randomText)
    cy.get("button[type='submit']").click()
    //cy.contains('Success').should('be.visible')
  })
})
