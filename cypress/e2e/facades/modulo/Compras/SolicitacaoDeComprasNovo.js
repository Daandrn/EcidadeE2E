import { Clicar } from "../../../../support/acoes/Clicar";
import { Submenu } from "../Submenu";

export class SolicitacaoDeComprasNovo extends Submenu {
    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    alterarDotacoes = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Alterar Dotações');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };
};
