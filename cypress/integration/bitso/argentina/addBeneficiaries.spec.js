describe('Add beneficiaries tests', () => {
  it('add beneficiaries with argentina account', () => {
    cy.login(Cypress.env('emailArgentina'), Cypress.env('passwordArgentina'))
    cy.visit('https://devmalta.bitso.com/r/user/beneficiaries/add')
    cy.get('#first_name').type('Juan')
    cy.get('#last_name').type('Perez')
    cy.get('#second_last_name').type('Diaz')
    cy.get('#dob').type('11/11/2011')
    cy.contains('label', 'Kinship').click()
    cy.contains('div', 'Friendship').click()
    cy.get('#percentage').type('30')
    cy.get('[data-testid="add-beneficiary-button"]').click() //This is the best way to add selectors
    cy.get('#pin').type(Cypress.env('pinArgentina'))
    cy.contains('button', 'Confirm').click()
  })
})