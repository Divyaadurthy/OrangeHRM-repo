describe('Admin Funtionality', () => {
    it.skip(' Verify Adding Job with Valid Data', () => {
        //Login in to the Website
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        //Enter Job Titles

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.contains('Job').click();
        cy.contains('Job Titles').click();
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');

        //  Validating Toast Success message

        cy.contains('Add').click();

        cy.get(':nth-child(2) > .oxd-input').click().type('QA2')
        cy.get("textarea[placeholder='Type description here']").click().type('Testing')


        cy.get("textarea[placeholder='Add note']").click().type('QA Testing Task')
        cy.get("button[type='submit']").click();

        cy.contains('Success').should("be.visible")




    })


    it('Verify Adding Pay Grades with Valid Data', () => {
        //Login in to the Website
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        //Click on Admin Pay grades

        //cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
        cy.contains('Job').click();
        cy.contains('Pay Grades').click();
       // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');

// Enter Data for Pay Grades 

cy.contains('Add').click();
//cy.get('div[class='oxd-input-group oxd-input-field-bottom-space').click().type('QALead')
 
cy.get(':nth-child(2) > .oxd-input').click().type('QALead')
cy.get("button[type='submit']").click();

cy.contains('Success').should("be.visible")




    });



});