describe('Acessando site', () => {

     it('Deve verificar se o formulario esta funcionando normalmente', () => {
       cy.visit("http://127.0.0.1:5500/cypress/e2e/index.html");
       cy.get('#register-form').should('be.visible');
       cy.get('.input-field').should('be.visible');
       cy.get('#register-button').should('have.text', 'Cadastrar');
       cy.get('.login-link').should('be.visible');
       cy.get('[type="text"]').type('Gabriel B. Anicheski');
       cy.get('[type="email"]').type('gabriel_ani@email.com');
       cy.get('[type="password"]').type('123456');
       cy.get('#register-button').click();

     });

    });