describe('Login Argentina user test', () => {
  it('login Argentina account', () => {
    cy.login(Cypress.env('emailArgentina'), Cypress.env('passwordArgentina'))
    cy.url().should('contain', '/user-knowledge')
    cy.contains('Tell us a bit about yourself').type('{esc}');
    cy.url().should('contain', '/wallet')
    cy.contains('label', 'ars').click()
    cy.contains('label', 'btc').click()
    cy.contains('label', 'bat').click()
    cy.contains('label', 'bch').click()
    cy.contains('label', 'dai').click()
    cy.contains('label', 'eth').click()
    cy.contains('label', 'ltc').click()
    cy.contains('label', 'mana').click()
    cy.contains('label', 'tusd').click()
    cy.contains('label', 'usdt').click()
    cy.contains('label', 'xrp').click()
  })

})