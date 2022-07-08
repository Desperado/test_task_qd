/// <reference types="cypress" />
const username = Cypress.env('username');
const password = Cypress.env('password');

context('The QD test task', () => {
    beforeEach(() => {
      cy.visit('/login');
    })
    it('Should open the start page', () => {
      cy.url().should('contain', 'login');
      
      cy.login(username, password);
      // Verify that user is inside the secure area
      cy.url().should('include', 'secure');
      cy.get('#flash').should('have.class', 'success');
      cy.get('h2').should('include.text', 'Secure Area');

    })

    it('User must be able to log out', () => {
      cy.login(username, password);
      cy.get('.icon-2x', { timeout: 5000 }).should('be.visible').click();
      // Login form is visible again
      cy.get('h2').should('contain', 'Login');
    })
    
    it('User must be not able to log in with invalid username', () => {
      // Showcase using custom cypress commands (defined in commands.js)
      cy.login('wrongUsername', password);
      cy.get('#flash').should('contain.text', 'Your username is invalid!');
    })

    it('User must be not able to log in with invalid password', () => {
      cy.visit('/login');
      // Showcase using custom cypress commands (defined in commands.js)
      cy.login(username, 'wrongPassword');
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
    })
})