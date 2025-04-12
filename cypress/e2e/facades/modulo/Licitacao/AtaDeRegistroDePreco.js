import { Clicar } from "../../../../support/acoes/Clicar";
import { Submenu } from "../Submenu";

export class AtaDeRegistroDePreco extends Submenu {
    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    anexosPncp = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Anexos Atas PNCP');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };
};
