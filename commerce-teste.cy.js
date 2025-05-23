describe('Teste em um E-commerce', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
  });

  it('simula o click no botão e verifica o cookie e localStorage', () => {
    cy.get('#btn-add').click();

    cy.getCookie('carrinho_token').should('exist');

    cy.window().then((win) => {
      const itens = JSON.parse(win.localStorage.getItem('itens_carrinho'));
      expect(itens).to.include('Livro de Cypress');
    });

    cy.reload();

    cy.get('#mensagem').should('contain', 'Carrinho com 1 item');
  });

  it('Definir cookie e localStorage manualmente e ver se reconhece o carrinho ativo', () => {
    cy.setCookie('carrinho_token', 'carrinho456');

    cy.window().then((win) => {
      win.localStorage.setItem('itens_carrinho', JSON.stringify(['Livro de Cypress']));
    });

    cy.reload();

    cy.getCookie('carrinho_token').should('have.property', 'value', 'carrinho456');

    cy.get('#mensagem').should('contain', 'Carrinho com 1 item');
  });
});
