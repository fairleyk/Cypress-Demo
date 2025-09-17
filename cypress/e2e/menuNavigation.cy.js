import { devices } from "../support/devices";
let menu;

devices.forEach((device) => {
  context(
    `${device.name}`,
    {
      viewportHeight: device.height,
      viewportWidth: device.width,
    },
    () => {
      before(() => {
        cy.fixture("menuItems").then((data) => {
          menu = data;
        });
        cy.visit("/menu");
        cy.contains("button", "Reject all").click();
      });

      it(`Each filter scrolls to the correct items on ${device.name}`, () => {
        Object.entries(menu.filters).forEach(([key, filterName]) => {
          cy.get(`[data-test-filter="${filterName}"]`).click();
          cy.get(`[data-test-card="${menu.cards[key]}"]`).should("be.visible");
        });
      });
    }
  );
});
