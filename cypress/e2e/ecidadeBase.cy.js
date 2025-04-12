import { Ecidade } from "./facades/Ecidade";
import { Helper } from "./facades/Helper";
import { Patrimonial } from "./facades/area/Patrimonial";
import { Compras } from "./facades/modulo/Compras";

describe('Ecidade based', () => {
  it('inicio', () => {

    Ecidade.define_resolucao();

    Ecidade.login(
      '', // Login
      '', // Senha
      '', //Nome da pasta da aplicacao
    );

    Ecidade.instituicao(1);

    Ecidade.area(new Patrimonial);

    Ecidade.modulo(new Compras)
      .procedimentos()
      .preco_de_referencia()
      .inclusao();

    Helper.buscar_escrever_id('si01_processocompra', 'aaa');
  });
});
