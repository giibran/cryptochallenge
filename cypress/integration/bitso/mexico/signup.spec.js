describe('Sing up tests', () => {
  it('create Mexico account', () => {
    cy.visit('https://devmalta.bitso.com/register')
    cy.signUpGenericFlow(Cypress.env('emailMexico'), Cypress.env('passwordMexico'))
    cy.get('#accept_nvio_terms')
      .click({ force: true })
    cy.contains('Start')
      .click()
  })
})
