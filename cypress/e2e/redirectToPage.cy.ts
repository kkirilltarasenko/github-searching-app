describe('Redirect repositories', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/');
  });

  it('allows user to search repositories', () => {
    cy.get('._repositories_1iegh_1').should('exist');
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(1) > ._repository__header_1chza_49 > ._repository__name_1chza_63 > a').eq(0).click();
  });
});