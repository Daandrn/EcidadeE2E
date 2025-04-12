export class Esperar {

    /**
     * Espera por tempo determinado em milesimos
     * @param {int} milesimos Quantidade de milesimos
     */
    static por_milesimos = (milesimos) => {
        return cy.wait(milesimos);
    };
    
    /**
     * Espera por tempo determinado em segundos
     * @param {int} segundos Quantidade de segundos
     */
    static por_segundos = (segundos) => {
        return cy.wait(segundos * 1000);
    };

    /**
     * Espera por tempo determinado em minutos
     * @param {int} minutos Quantidade de minutos
     */
    static por_minutos = (minutos) => {
        let umSegundo = 1000;
        let umMinuto  = umSegundo * 60;
        return cy.wait(minutos * umMinuto);
    };
};
