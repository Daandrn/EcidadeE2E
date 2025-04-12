import { Area } from "./area/Area";
import { Modulo } from "./modulo/Modulo";
import { Helper } from "./Helper";
import 'cypress-iframe';

export class Ecidade {
    /**
     * Realiza login no e-cidade
     * @param {string} login informe o seu login do e-cidade
     * @param {string} senha informe a sua senha do e-cidade
     * @param {string} nome_do_dev informe o nome da aplicacao do dev no servidor de desenvolvimento
     */
    static login = (login, senha, nome_do_dev) => {
      cy.visit(`http://testev3.contassconsultoria.com.br/e-cidade-${nome_do_dev}/login.php`);
  
      cy.get('[id="usu_login"]').type(login);
      cy.get('[id="usu_senha"]').type(senha);
  
      cy.get('[id="btnlogar"]')
        .should('have.value', 'Entrar')
        .click();
  
        Helper.esperar_em_segundos(2);
  
        cy.visit(`http://testev3.contassconsultoria.com.br/e-cidade-${nome_do_dev}/extension/desktop/`);
  
        Helper.esperar_em_segundos(1);

        return;
    };

    /**
     * Informe o codigo da instiuicao
     * @param {int} cod_instituicao Recebe 1, 2, 3, 4, 5...
     */
    static instituicao = (cod_instituicao) => {
      Helper.buscar_clicar('MENU');
      
      cy.get(`.instituicao_${cod_instituicao}`).click();

      return;
    };
  
    /**
     * @param {Area} area 
     */
    static area = (area) => {
      return area.make();
    }
  
    /**
     * @param {Modulo} modulo
     * @returns {Modulo} 
     */
    static modulo = (modulo) => {
      return modulo;
    }
  
    /**
     * Acessa a rotina pela descricao do menu
     * @param {string} descricao Informar a descricao do menu
     */
    acessar_rotina = (descricao) => {
      return cy.contains(descricao).click();
    };

    /**
     * Define a resolucao da tela - Padrao 1600x900
     * @param {int|null} largura Largura da resolucao
     * @param {int|null} altura Altura da resolucao
     */
    static define_resolucao = (largura = null, altura = null) => {
      return cy.viewport(largura ?? 1600, altura ?? 900);
    };
}
