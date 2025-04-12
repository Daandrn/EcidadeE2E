import { Ecidade } from "./../facades/Ecidade";
import { Clicar } from "./../../support/acoes/Clicar";
import { Esperar } from "./../../support/acoes/Esperar";
import { Patrimonial } from "./../facades/area/Patrimonial";
import { Licitacao } from "./../facades/modulo/Licitacao/Licitacao";

describe('Pregao Presencial', () => {
  it('Fase de lances', () => {

    Ecidade.define_resolucao();

    Ecidade.login('e-cidade-lucas-ptr');

    Ecidade.instituicao(1);

    Ecidade.area(new Patrimonial);

    Ecidade.modulo(new Licitacao)
      .procedimentos()
      .julgamentoPorLance()
      .faseDeLances(() => {
        Esperar.por_segundos(2);
        
        Clicar.no_id('avisodeacoestabela', false, true);

        Clicar.na_classe('textfield-anchor-container'); // Clica na nova ancora para listar os processos
  
        Clicar.na_descricao(1988, true);

        Clicar.na_descricao('BARRA DE CEREAL');

        Clicar.na_descricao('Classificar');

        //a partir daqui da erro devido o conteudo dentro do iFrame mudar quando clica em classificar
      }, 1);
      
  });
});
