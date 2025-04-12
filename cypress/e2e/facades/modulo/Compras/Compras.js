import { Clicar } from "../../../../support/acoes/Clicar";
import { Modulo } from "../Modulo";
import { Submenu } from "../Submenu";
import { SolicitacaoDeCompras } from "./SolicitacaoDeCompras";
import { SolicitacaoDeComprasNovo } from "./SolicitacaoDeComprasNovo";

export class Compras extends Modulo {
  constructor(db_modulos_id_item) {
    super('28'); // recebe o id_item da tabela db_modulos
  };

  solicitacao_de_compras = () => {
    Clicar.na_descricao('Solicitação de Compras');

    return new SolicitacaoDeCompras;
  };

  /**
   * @param {CallableFunction} acoes_na_rotina Recebe uma funcao anonima contendo as acoes a serem realizadas na tela.
   * @param {int} posicao_aba Numero da posicao da aba na tela. Por padrão recebe aba 1.
   * @returns Conteudo do frame da rotina.
   */
  liberarSolicitacao = (acoes_na_rotina, posicao_aba = 1) => {
    Clicar.na_descricao('Liberar solicitação');

    this.loadFrame(acoes_na_rotina, posicao_aba);

    return;
  };

  processo_de_compras = () => {
    Clicar.na_descricao('Processo de Compras');

    return this;
  };

  registro_de_precos = () => {
    Clicar.na_descricao('Registros de Preço');

    return this;
  };

  orcamento_de_processo_de_compras = () => {
    Clicar.na_descricao('Orçamento de processo de compras');

    return this;
  };

  preco_de_referencia = () => {
    Clicar.na_descricao('Preço de Referência');

    return this;
  };

  solicitacao_de_compras_novo = () => {
    Clicar.na_descricao('Solicitação de Compras (Novo)');

    return new SolicitacaoDeComprasNovo;
  };
};
