describe('Changing pages', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('allows user to change pages', () => {
    cy.get('._repositories_1iegh_1').should('exist');
    cy.get('._paginator_xdl8u_1 > :nth-child(3)').contains('3').should('exist').click();
  });
});