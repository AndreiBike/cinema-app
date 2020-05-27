describe("e2e testing", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("it focuses the input", () => {
    cy.get('.search-input-field')
      .focus()
      .type("Hallo world")
      .should('have.value', "Hallo world");
  });

  it("Putting the button \" Search by Gengre \" ", () => {
    cy.get('.gengre-button')
      .click()
      .should('have.class', 'gengre-button active');
  });

  it("Putting the button \" Search by Title \" ", () => {
    cy.get('.title-button')
      .click()
      .should('have.class', 'title-button active');
  });

  it("Putting the button \" Sort by Rating \" ", () => {
    cy.get('.rating-button')
    .click()
    .should('have.class', "rating-button active");
  });

  it("Putting the button \" Sort by Release date \" ", () => {
    cy.get('.release-button')
    .click()
    .should('have.class', "release-button active");
  });

})