export class Area {
    identificador = null;

    constructor (identificador) {
        this.identificador = identificador;
    }

    /**
     * Acessa a area
     */
    make = () => {
        cy.get(this.identificador).click();
    };
}
