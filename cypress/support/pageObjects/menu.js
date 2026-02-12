export class menuPage {
  veganSausageRoll = "1002132";
  rejectAllCookiesBtn = () => cy.contains("button", "Reject all");
  searchInput = () => cy.get('input[id="article-search"]');
  menuItems = () => cy.get("[data-test-card]");
  menuItem = (id) => cy.get(`[data-test-card="${id}"]`);

  rejectCookies() {
    this.rejectAllCookiesBtn().click();
    this.rejectAllCookiesBtn().should("not.be.visible");
  }

  search(searchItem) {
    this.searchInput().type(searchItem);
  }
}
