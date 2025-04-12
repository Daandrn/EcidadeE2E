import { Ecidade } from "./facades/Ecidade";
import { Clicar } from "../support/acoes/Clicar";
import { Escrever } from "../support/acoes/Escrever";
import { Esperar } from "../support/acoes/Esperar";
import { Patrimonial } from "./facades/area/Patrimonial";
import { Licitacao } from "./facades/modulo/Licitacao/Licitacao";
import { Compras } from "./facades/modulo/Compras/Compras";

describe('Ecidade based', () => {
  it('Primeiro passo', () => {

    Ecidade.login('e-cidade-lucas-ptr');

    Ecidade.instituicao(1); // define a instituicao

    Ecidade.area(new Patrimonial); // define a area

    Ecidade.modulo(new Licitacao) // define o modulo
      .procedimentos()
      .adjudicacao()
      .inclusao(() => {

      });

    Ecidade.instituicao(7); // é possível trocar de instituicao

    Ecidade.modulo(new Compras) // é possível acessar outros modulos
      .procedimentos()
      .solicitacao_de_compras()
      .inclusao(() => {
        
      });
      
  });

  it('Segundo passo', () => {

    Ecidade.login('e-cidade-lucas-ptr');

    Ecidade.instituicao(7); // é possível trocar de instituicao

    Ecidade.modulo(new Compras) // é possível acessar outros modulos
      .procedimentos()
      .solicitacao_de_compras()
      .inclusao(() => {
        
      });
      
  });
});
