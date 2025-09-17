import { devices } from "../support/devices";

devices.forEach((device) => {
  context(
    `${device.name}`,
    {
      viewportHeight: device.height,
      viewportWidth: device.width,
    },
    () => {
      it(`All menu items render correctly on ${device.name}`, () => {
        cy.visit("/menu");
        cy.contains("button", "Reject all").click();
        cy.get("[data-test-card]").each(($el) => {
          cy.get($el).scrollIntoView();
          cy.wrap($el).should("be.visible");
          cy.wrap($el).find("img").should("be.visible");
          cy.wrap($el).find("h3").invoke("text").should("not.be.empty");
        });
      });
    }
  );
});
