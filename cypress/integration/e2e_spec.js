import cy from 'cypress';

describe("e2e testing",()=> {
  it("visit the app", ()=> {
    cy.visit("http://localhost:3000/");
  })
})