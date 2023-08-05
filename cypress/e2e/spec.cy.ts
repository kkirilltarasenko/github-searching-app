describe('home page', () => {
  it('contains  h1', () => {
    cy.visit('http://127.0.0.1:5173/');
    cy.get('h1')
      .should("exist")
      .contains('GitHub Repositories search');
  });
});