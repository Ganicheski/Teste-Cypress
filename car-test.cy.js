describe('Teste da pagina de alugueis de carro', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
    });

    it('Verifica os elementos visiveis', () => {
        cy.contains('h1', "Avaliação do Veículo");
        cy.get('#nome').should('be.visible');
        cy.get('#comentario').should('be.visible');
        cy.get('#submit-button').should('be.visible');
        cy.get('#avaliacoes').should('be.empty');
    });

    it('Verifica os textos e atributos', () => {
        cy.get('#submit-button').should("have.text", 'Enviar Avaliação');
        cy.get('#nome').should('have.attr', "placeholder", 'Digite seu nome');
        cy.get('#comentario').should('have.attr', 'placeholder', 'Descreva sua experiência com o veículo...');
    });

    it('Verifica as funcionalidades', () => {
        cy.get('#nome').type('Gabriel Anicheski');
        cy.get('#comentario').type('Ótimo carro');
        cy.get('#submit-button').click();

        cy.get('#loading').should('be.visible');
        
        cy.wait(3000);
        cy.get('#avaliacoes').contains('Gabriel Anicheski: Ótimo carro');
    });

    it('Verifica o erro ao enviar sem o nome', () => {
        cy.get('#comentario').type('Ótimo carro');
        cy.get('#submit-button').click();
        cy.on('window.alert', (str) => {
            expect(str).to.equal('Por favor, preencha todos os campos.');
        });
    });
       
       
    it('Verifica o erro ao enviar sem o comentario',() => {
        cy.get('#nome').type('Gabriel Anicheski');
        cy.get('#submit-button').click();
        cy.on('window.alert', (str) => {
            expect(str).to.equal('Por favor, preencha todos os campos.');
        });
     });
});