import { Clicar } from "../../../support/acoes/Clicar";
import { Iframe } from "./../Iframe";

export class Submenu extends Iframe {
    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    inclusao = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Inclusão');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };

    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    alteracao = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Alteração');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };

    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    exclusao = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Exclusão');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };

    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    anulacao = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Anulação');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };
};
