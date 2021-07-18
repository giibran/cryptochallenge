// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://devmalta.bitso.com/')
    cy.contains('Log in').click()
    cy.url().should('contain', '/login')
    cy.get('#client_id').type(email)
    cy.get('#password').type(password)
    cy.contains('button', 'Log in').click()
})

Cypress.Commands.add('signUpGenericFlow', (email, password) => {
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.get('#password_confirmation').type(password)
  cy.get('#accept_terms').click({ force: true })
  cy.get('#accept_mail').click({ force: true })
  cy.get('#accept_privacy').click({ force: true })
})

Cypress.Commands.add('clickAllCryptosGenericFlow', () => {
  cy.contains('label', 'btc').click()
  cy.get('.moon-arrow_deposit').click()
  cy.get('[data-testid="crypto-risk-warning-checkbox"]').click({force: true})
  cy.get('[data-testid="crypto-risk-warning-button"]').click({force: true})
  cy.contains('h3', 'Oops! Something went wrong').type('{esc}')
  cy.contains('label', 'bat').click()
  cy.get('.moon-arrow_deposit').click()
  cy.contains('h3', 'Oops! Something went wrong').type('{esc}')
  cy.contains('label', 'bch').click()
  cy.contains('label', 'dai').click()
  cy.contains('label', 'eth').click()
  cy.contains('label', 'ltc').click()
  cy.contains('label', 'mana').click()
  cy.contains('label', 'tusd').click()
  cy.contains('label', 'usdt').click()
  cy.contains('label', 'xrp').click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
