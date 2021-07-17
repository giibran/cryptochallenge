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
