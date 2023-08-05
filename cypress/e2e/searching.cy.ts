describe('Searching repositories', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('allows user to search repositories', () => {
    cy.get('._input_1dxap_1').should('exist').type('react');
    cy.wait(1000);
    cy.get('._repositories_1iegh_1').should('exist');
  });
});