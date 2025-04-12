import { Clicar } from "../../../support/acoes/Clicar";

export class Area {
    classArea = 'area_';

    constructor (at26_sequencial_atendcadarea) {
        this.classArea += at26_sequencial_atendcadarea;
    }

    /**
     * Acessa a area
     */
    abrir = () => {
        return Clicar.na_classe(this.classArea);
    };
}
