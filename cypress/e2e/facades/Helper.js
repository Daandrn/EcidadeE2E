export class Helper {
    static esperar_em_segundos = (segundos) => {
      return cy.wait(segundos*1000);
    };
  
    /**
     * Busca e clica no elemento com base em sua descricao
     * @param {string} descricao Descricao do menu
     */
    static buscar_clicar = (descricao) => {
        return cy.contains(descricao).click();
    };

    /**
     * 
     * @param {string} element_id 
     * @param {string} input
     * @returns 
     */
    static buscar_escrever_id = (element_id, input) => {
      return cy.get(element_id).type(input);
    };
};
  