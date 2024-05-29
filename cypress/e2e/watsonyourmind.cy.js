describe('Buzz Module Verification', () => {
  it('verify user can do a posting in whats on your mind', () => {
    cy.visit(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    )

    cy.get('input[name="username"]').type('Admin')

    cy.get('input[type="password"]').type('admin123')

    cy.get('button[type="submit"]').click()
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
    )
    cy.get(
      'body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(12) > a:nth-child(1) > span:nth-child(2)',
    ).click()
    
    cy.get(`textarea[placeholder="What's on your mind?"]`).type("Hi Good morning to Everyone!")

    cy.get("button[type='submit']").click();
    cy.contains('Hi Good morning to Everyone!').should("be.visible")
  })
})
