import { Clicar } from "../../../../support/acoes/Clicar";
import { Iframe } from "../../Iframe";

export class JulgamentoPorLance extends Iframe {
    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    lancamentoDePropostas = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Lançamento de Propostas');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };
    
    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    relatorios = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Relatórios');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };

    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    faseDeLances = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Fase de Lances');

        this.loadFrame(acoes_na_rotina, posicao_aba);
    
        return;
    };

    /**
     * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
     * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
     * @returns Conteudo do frame da rotina.
     */
    parametros = (acoes_na_rotina, posicao_aba = 1) => {
        Clicar.na_descricao('Parâmetros');
    
        this.loadFrame(acoes_na_rotina, posicao_aba);
        
        return;
    };
};
