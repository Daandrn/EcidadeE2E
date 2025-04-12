import { Clicar } from "../../../support/acoes/Clicar";

export class Modulo {
  classModulo = 'modulo_';

  constructor (id_item_db_modulos) {
    this.classModulo += id_item_db_modulos;
  }

  /**
   * Acessa o modulo
   */
  abrir = () => {
    return Clicar.na_classe(this.classModulo);
  };

  relatorios = () => {
    Clicar.na_descricao('Relatorios');
    
    return this;
  };

  consulta = () => {
    Clicar.na_descricao('Consulta');
    
    return this;
  };

  procedimentos = () => {
    Clicar.na_descricao('Procedimentos');
    
    return this;
  };
};