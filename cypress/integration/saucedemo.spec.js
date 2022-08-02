describe("Saucedemo / swaglabs website",() => {
  // beforeEach(() => {
  //   cy.visit("https://www.saucedemo.com");

  //   const username = "standard_user";
  //   const password = "secret_sauce";

  //   cy.get('input[data-test="username"]').type(username)
  //   .get('input[data-test="password"]').type(password)
  //   .get('input[data-test="login-button"]').click();
  // });

  context("checking login errors", () => {
    
  });

  it("should login correctly and land on the right page", () => {
    cy.get(".app_logo").should('be.visible');
  });

  it("should add backpack to cart (assumes cart it empty)", () => {
    cy.get('span.shopping_cart_badge').should('not.be.visible');
  });


});