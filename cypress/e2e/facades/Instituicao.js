import { Clicar } from "../../support/acoes/Clicar";

export class Instituicao {
    classInstituicao = 'instituicao_';

    constructor (codigo_db_config) {
        this.classInstituicao += codigo_db_config;
    }

    /**
     * Acessa a instituicao
     */
    abrir = () => {
        return Clicar.na_classe(this.classInstituicao);
    };
}
