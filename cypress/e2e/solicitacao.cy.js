import { Ecidade } from "./facades/Ecidade";
import { Clicar } from "../support/acoes/Clicar";
import { Escrever } from "../support/acoes/Escrever";
import { Esperar } from "../support/acoes/Esperar";
import { Compras } from "./facades/modulo/Compras/Compras";
import { Patrimonial } from "./facades/area/Patrimonial";

describe('incluir solicitacao', () => {
  it('Primeiro passo', () => {

    Ecidade.login('e-cidade-lucas-ptr');

    Ecidade.instituicao(1); // é possível trocar de instituicao

    Ecidade.area(new Patrimonial);

    Ecidade.modulo(new Compras) // é possível acessar outros modulos
      .procedimentos()
      .solicitacao_de_compras_novo()
      .inclusao(() => {
        Clicar.no_botao('Incluir'); // não funciona pois tem muitos iFrame aninhados
      });
      

  });
});
