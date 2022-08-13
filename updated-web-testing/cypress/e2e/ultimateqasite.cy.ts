describe("Ultimate QA Website", () => {
  beforeEach(() => {
    cy.visit("https://ultimateqa.com/automation");
  });

  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});
