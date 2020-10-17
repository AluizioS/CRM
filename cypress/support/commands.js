// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// -- This is a login command --
Cypress.Commands.add("loginAdmin", (username, password, assertLoggedIn = true) => {
    cy.login("admin", "changeme");
});

Cypress.Commands.add("loginStandard", (username, password, assertLoggedIn = true) => {
    cy.login("tony.wade@example.com", "abc123");
});

Cypress.Commands.add("login", (username, password, assertLoggedIn = true) => {
    cy.visit("/");
    cy.wait(150);
    cy.get("#UserBox").type(username);
    cy.get("#PasswordBox").type(password);
    cy.get("form").submit();
    if (assertLoggedIn) {
        cy.location('pathname').should('include', "/Menu.php");
    }
});
