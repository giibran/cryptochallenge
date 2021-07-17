describe('Login Mexico user test', () => {
  it('login mexico account', () => {
    cy.login(Cypress.env('emailMexico'), Cypress.env('passwordMexico'))
    cy.url().should('contain', '/user-knowledge')
    cy.contains('Tell us a bit about yourself').type('{esc}');
    cy.url().should('contain', '/wallet')
    cy.contains('label', 'mxn').click()
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