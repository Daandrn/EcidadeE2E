export class Iframe {

    /**
     * Carrega o iFrame da rotina com base na posicao da aba no sistema.
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. preenchimento obrigatório.
     */
    loadFrame = (acoes_na_rotina, posicao_aba) => {
        cy.frameLoaded(`#w${posicao_aba}_content`);

        cy.iframe(`#w${posicao_aba}_content`).within(() => {
    
            cy.get('#corpo').then($iframe => {
              const $body = $iframe[0].contentDocument.body;
              
              cy.wrap($body).within(acoes_na_rotina);
            });
        });
    }
}