import data from '../fixtures/admin/login.json'

describe('Delete funtionality Orange HRM', () => {
    it.only('Verify deleting signal record in PIM module', () => {
        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type(data.username)
        cy.get('input[type="password"]').type(data.password)
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('PIM').click({ force: true });
        cy.url().should('include', 'web/index.php/pim/viewEmployeeList')

        cy.get('div[role="table"] div:nth-child(1) div:nth-child(1) div:nth-child(9) div:nth-child(1) button:nth-child(1) i:nth-child(1)').click();
        cy.wait(3000)

    });

    it('Verify deleting multiple records in PIM module ', () => {
        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type(data.username)
        cy.get('input[type="password"]').type(data.password)
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('PIM').click({ force: true });
        cy.url().should('include', 'web/index.php/pim/viewEmployeeList')
        cy.get('div[role="columnheader"] span[class="oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input"]').click();
        cy.wait(3000)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--label-danger orangehrm-horizontal-margin"]').should('be.visible').click();




    });


    it('Verify Records found text on the page ', () => {
        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type(data.username)
        cy.get('input[type="password"]').type(data.password)
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')

        cy.contains('PIM').click({ force: true });
        cy.url().should('include', 'web/index.php/pim/viewEmployeeList')
        cy.contains('Records Found').should('be.visible')


    });


    it('Verify pagination of the page  ', () => {

        cy.visit('/web/index.php/auth/login')

        cy.get('input[name="username"]').type(data.username)
        cy.get('input[type="password"]').type(data.password)
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')

        cy.contains('PIM').click({ force: true });
        cy.url().should('include', 'web/index.php/pim/viewEmployeeList')
        cy.get('button[class="oxd-pagination-page-item oxd-pagination-page-item--page oxd-pagination-page-item--page-selected"]').should("be.visible")
    });
})