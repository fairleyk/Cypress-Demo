import { devices } from "../support/devices";
import { menuPage } from "../support/pageObjects/menu";

const menu = new menuPage();

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
        menu.rejectCookies();
        menu.search("Vegan");
        menu.menuItems().should("have.length", 3);
        menu.menuItem(menu.veganSausageRoll).should("be.visible");
      });
    },
  );
});
