import "cypress-axe";

it("Menu page is accessible", () => {
  cy.visit("/menu");
  cy.get("button").contains("Reject all").click();
  cy.contains("button", "Reject all").should("not.be.visible");
  cy.injectAxe();
  cy.checkA11y();
});
