export class Escrever {
    /**
     * Escreve no input com nase no ID
     * @param {string} element_id id do elemento
     * @param {string} texto texto a ser escrito
     * @returns 
     */
    static no_input_por_id = (element_id, texto) => {
        return cy.get(`#${element_id}`).type(texto);
    };

    /**
     * Escreve no input com nase na classe
     * @param {string} element_classe classe do elemento
     * @param {string} texto texto a ser escrito
     * @returns 
     */
    static no_input_por_classe = (element_classe, texto) => {
        return cy.get(`#${element_classe}`).type(texto);
    };

    /**
     * Escreve em varios inputs ao mesmo tempo com base no ID
     * @param {array[string,string]} idElemento_texto
     * @returns 
     */
    static em_multiplos_inputs_por_id = (idElemento_texto) => {
        idElemento_texto.forEach(texto, idElemento_texto => {
        cy.get(`#${idElemento_texto}`).type(texto);
        });
    };
};
