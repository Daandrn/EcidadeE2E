export class Clicar {
    /**
     * Busca e clica no elemento com base em sua descricao
     * @param {string} descricao Descricao do menu
     * @param {boolean} double_click acionar clique duplo
     */
    static na_descricao = (descricao, double_click = false) => {
        const get = cy.contains(descricao);
        
        return double_click 
        ? get.dblclick() 
        : get.click();
    };

    /**
     * Busca e clica no elemento com base em seu id
     * @param {string} id Id do elemento html
     * @param {boolean} double_click acionar clique duplo
     * @param {boolean} ignorar_se_inexiste Id do elemento html
     */
    static no_id = (id, double_click = false, ignorar_se_inexiste = false) => {
        const get = cy.get(`#${id}`);

        if (!get && ignorar_se_inexiste) {
            return;
        }

        return double_click 
        ? get.dblclick() 
        : get.click();
    };

    /**
     * Busca e clica no elemento com base em sua classe
     * @param {string} classe classe do elemento html
     * @param {boolean} double_click acionar clique duplo
     */
    static na_classe = (classe, double_click = false) => {
        const get = cy.get(`.${classe}`);
        
        return double_click 
        ? get.dblclick() 
        : get.click();
    };

    /**
     * Busca e clica no botão com base no nome do mesmo
     * @param {string} nome nome do botão
     * @param {boolean} double_click acionar clique duplo
     */
    static no_botao = (nome, double_click = false) => {
        const get = cy.get(`input[type="button"][value="${nome}"], input[type="button"][id="${nome}"]`);
        
        return double_click 
        ? get.dblclick() 
        : get.click();
    };
};
