describe.only('Login functionality Orange HRM', () => {
    it('Verify login with Valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        cy.contains('Dashboard').should("be.visible")

    })


    it('Verify login with Valid username and invalid password', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Admin")

        cy.get('input[type="password"]').type("kerfhyuerhuio")

        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should("be.visible")
    })

  
    it('Verify login with InValid username and valid password', () => {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type("yhfuerhfyu")
    
        cy.get('input[type="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        cy.contains('Invalid credentials').should("be.visible")
      })

      it('Verify login with InValid username and INvalid password', () => {
    
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('input[name="username"]').type("yhfuerhfyu")
    
        cy.get('input[type="password"]').type("erugtuy")
    
        cy.get('button[type="submit"]').click()
    
        cy.contains('Invalid credentials').should("be.visible")
      })

});
