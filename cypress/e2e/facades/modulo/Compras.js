import { Helper } from "../Helper";
import { Modulo } from "./Modulo";

export class Compras extends Modulo {
    constructor(identificador) {
      super('.modulo_28');
    };

    solicitacao_de_compras = () => {
      Helper.buscar_clicar('Solicitação de Compras');

      return this;
    };

    liberar_solicitacao = () => {
      Helper.buscar_clicar('Liberar Solicitação');

      return;
    };

    processo_de_compras = () => {
      Helper.buscar_clicar('Processo de Compras');

      return this;
    };

    registro_de_precos = () => {
      Helper.buscar_clicar('Registros de Preço');

      return this;
    };

    orcamento_de_processo_de_compras = () => {
      Helper.buscar_clicar('Orçamento de processo de compras');

      return this;
    };

    preco_de_referencia = () => {
      Helper.buscar_clicar('Preço de Referência');

      return this;
    };
  
    solicitacao_de_compras_novo = () => {
      Helper.buscar_clicar('Solicitação de Compras (Novo)');

      return this;
    };
};
