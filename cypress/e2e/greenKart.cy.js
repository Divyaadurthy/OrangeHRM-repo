describe('Verification of total calculation accuracy.', () => {
  it.only('verify total calculation ', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get(
      'div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(1) div.product-action > button:nth-child(1)',
    ).click({ force: true })
    cy.get(
      ' div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(2) div.product-action > button:nth-child(1)',
    ).click({ force: true })
    cy.get("img[alt='Cart']").should('be.visible')
    cy.get('.cart-info').should('be.visible')

    cy.get(':nth-child(2) > :nth-child(3) > strong').should('contain', 180)
  })

  it('Verify to proceed to payment ', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get(
      'div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(1) div.product-action > button:nth-child(1)',
    ).click({ force: true })
    cy.get(
      ' div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(2) div.product-action > button:nth-child(1)',
    ).click({ force: true })
    cy.get("img[alt='Cart']").click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.url().should('include', '/seleniumPractise/#/cart')
  })

  it('Verify placing Order ', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get(
      'div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(1) div.product-action > button:nth-child(1)',
    ).click({ force: true })
    cy.get(
      ' div.container div.products-wrapper:nth-child(2) div.products div.product:nth-child(2) div.product-action > button:nth-child(1)',
    ).click({ force: true })
    cy.get("img[alt='Cart']").click()

    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    cy.get('select').select('Belgium').invoke('val').should('eq', 'Belgium')

    cy.get("input[type='checkbox']").check()

    cy.contains('Proceed').click()

    cy.url().should('include', 'seleniumPractise/#/country')
  })
})
