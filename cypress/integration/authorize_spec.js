describe("Authorize page", () => {
    it('.should() - assert that <title> is correct', () => {
      cy.visit('http://localhost:8080/authorize/login');
      cy
        .get("input#login")
        .type('fake@email.com')
        .should('have.value', 'fake@email.com');
      cy
        .get("input#login").clear();
    });
  });