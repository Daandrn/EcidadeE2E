import { Clicar } from "../../../../support/acoes/Clicar";
import { Modulo } from "../Modulo";
import { Submenu } from "../Submenu";
import { AtaDeRegistroDePreco } from "./AtaDeregistroDePreco";
import { JulgamentoPorLance } from "./JulgamentoPorLance";

export class Licitacao extends Modulo {
  constructor(db_modulos_id_item) {
    super('381'); // recebe o id_item da tabela db_modulos
  };

  adjudicacao = () => {
    Clicar.na_descricao('Adjudicação');

    return new Submenu;
  };

  /**
   * Retorna uma istancia de AtaDeRegistroDePreco
   * @returns {AtaDeRegistroDePreco}
   */
  ataDeRegistroDePreco = () => {
    Clicar.na_descricao('Ata de Registro de Preço');

    return new AtaDeRegistroDePreco;
  };

  /**
   * Retorna uma istancia de JulgamentoPorLance
   * @returns {JulgamentoPorLance}
   */
  julgamentoPorLance = () => {
    Clicar.na_descricao('Julgamento por Lance');

    return new JulgamentoPorLance;
  };
};
