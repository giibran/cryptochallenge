describe('Sing up tests', () => {
  it('create Argentina account', () => {
    cy.visit('https://devmalta.bitso.com/register')
    cy.get('#country').type('Argentina', { force: true }).type('{enter}')
    cy.signUpGenericFlow(Cypress.env('emailArgentina'), Cypress.env('passwordArgentina'))
    cy.contains('button', 'Start').click()
  })
})
