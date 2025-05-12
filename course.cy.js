describe('Teste de cookies e localstorage', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
    });

    it('Deve realizar o login e verifica session token e storage', () => {
        cy.get('#email').type('aluno@curso.com');
        cy.get('#senha').type('curso2024');
        cy.get('button[type="submit"]').click();

        cy.contains('Acesso concedido!').should('be.visible');

        //Verificando Cookie
        cy.getCookie('curso_token').should('exist');

        //Verificando LocalStorage
        cy.window().then((win) => {
            const user = win.localStorage.getItem('aluno_email')
            expect(user).to.equal('aluno@curso.com');
        })
    });

     it('Deve setar cookie e localstorage manualmente e simular login', () => {
        
        //Define os dados manualmente
        cy.setCookie('curso_token', 'curso123')
        cy.window().then((win) => {
            win.localStorage.setItem('aluno_email', 'aluno@curso.com')
        })

        //Recarrega a pagina
        cy.reload();

        //Verifica se os dados ainda estão presentes
        cy.getCookie('curso_token').should('have.property', 'value', 'curso123')
        cy.window().then((win) => {
            expect(win.localStorage.getItem('aluno_email')).to.equal('aluno@curso.com')
        })
    })

});