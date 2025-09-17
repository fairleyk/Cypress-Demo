import { devices } from "../support/devices";

devices.forEach((device) => {
  context(
    `${device.name}`,
    {
      viewportHeight: device.height,
      viewportWidth: device.width,
    },
    () => {
      it(`Typing into Search Bar shows relevant result on ${device.name}`, () => {
        cy.visit("/menu");
        cy.contains("button", "Reject all").click();
        cy.contains("button", "Reject all").should("not.be.visible");
        cy.get('input[id="article-search"]').type("Vegan");
        cy.get("[data-test-card]").should("have.length", 3);
        cy.get('[data-test-card="1002132"]').should("be.visible");
      });
    }
  );
});
