describe('Acessando site', () => {

    it('Deve verificar se o formulario esta funcionando normalmente', () => {
      cy.visit("http://127.0.0.1:5500/e2e/index.html");
      cy.get('#nome').type('João Silva');
      cy.get('#email').type('joao.silva@email.com');
      cy.get('#telefone').type('1199999999');
      cy.get('#senha').type('Teste@123');
      cy.get('#confirma_senha').type('Teste@123');

      cy.get('#nome').should('have.value', 'João Silva');
      cy.get('#email').should('have.value', 'joao.silva@email.com');
      cy.get('#telefone').should('have.value', '1199999999');
      cy.get('#senha').should('have.value', 'Teste@123');
      cy.get('#confirma_senha').should('have.value', 'Teste@123');

      cy.get('[type="submit"]').click();
      cy.url().should('include', 'index.html?nome=Jo%C3%A3o+Silva&email=joao.silva%40email.com&telefone=1199999999&senha=Teste%40123&confirma_senha=Teste%40123');

    });

   });