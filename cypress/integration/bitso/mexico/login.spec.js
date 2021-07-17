describe('Login Mexico user test', () => {
  it('login mexico account', () => {
    cy.login(Cypress.env('emailMexico'), Cypress.env('passwordMexico'))
    cy.url().should('contain', '/user-knowledge')
    cy.contains('Tell us a bit about yourself').type('{esc}');
    cy.url().should('contain', '/wallet')
    cy.contains('label', 'mxn').click()
    cy.clickAllCryptosGenericFlow()
  })

})