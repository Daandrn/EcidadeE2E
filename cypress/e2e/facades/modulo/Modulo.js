import { Helper } from "./../Helper";

export class Modulo {
    identificador = null;
  
    constructor (identificador) {
      this.identificador = identificador;
  
      this.make();
    }
  
    /**
     * Acessa o modulo
     */
    make = () => {
      cy.get(this.identificador).click();
    };
  
    relatorios = () => {
  
      Helper.buscar_clicar('Relatorios');
      
      return this;
    };
  
    consulta = () => {
  
      Helper.buscar_clicar('Consulta');
      
      return this;
    };
  
    procedimentos = () => {
  
      Helper.buscar_clicar('Procedimentos');
      
      return this;
    };

    inclusao = () => {
      Helper.buscar_clicar('Inclusão');

      return;
  }

  alteracao = () => {
      Helper.buscar_clicar('Alteração');

      return;
  }

  exclusao = () => {
      Helper.buscar_clicar('Exclusão');

      return;
  }

  anulacao = () => {
      Helper.buscar_clicar('Anulação');

      return;
  }
};