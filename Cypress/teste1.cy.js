describe('Editor Python Online', () => {
  	it('Acessa o google', () => {
    cy.visit('https://www.google.com.br');
	});

	it('Pesquisa o site', () => {
		cy.get('input[title="Pesquisar"]')
		.type('python online')
		.type('{enter}');

		cy.contains('Programiz').click();
	});

})