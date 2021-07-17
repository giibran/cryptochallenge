describe('Login Argentina user test', () => {
  it('login Argentina account', () => {
    cy.login(Cypress.env('emailArgentina'), Cypress.env('passwordArgentina'))
    cy.url().should('contain', '/user-knowledge')
    cy.contains('Tell us a bit about yourself').type('{esc}');
    cy.url().should('contain', '/wallet')
    cy.contains('label', 'ars').click()
    cy.clickAllCryptosGenericFlow()
  })

})