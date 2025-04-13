import { Clicar } from "../../support/acoes/Clicar";
import { Escrever } from "../../support/acoes/Escrever";
import { Esperar } from "../../support/acoes/Esperar";
import { Area } from "./area/Area";
import { Instituicao } from "./Instituicao";
import { Modulo } from "./modulo/Modulo";

export class Ecidade {
  static define = {
    instituicao: null,
    area: null,
    modulo: null
  };
  
  /**
   * Realiza login no e-cidade com as credenciais do .env.
   * Ou login e senha informado por parametro
   * @param {string} nome_pasta informe o nome da pasta/aplicacao
   * @param {string} login informe o seu login do e-cidade
   * @param {string} senha informe a sua senha do e-cidade
   */
  static login = (nome_pasta = null, login = null, senha = null) => {
    cy.visit(Cypress.env('baseUrl') + `${nome_pasta ?? Cypress.env('nomePasta')}/login.php`);

    Escrever.no_input_por_id('usu_login', login ?? Cypress.env('usuario'));
    Escrever.no_input_por_id('usu_senha', login ?? Cypress.env('senha'));

    Clicar.no_botao('Entrar');

    Esperar.por_segundos(2);

    cy.visit(Cypress.env('baseUrl') + `${nome_pasta ?? Cypress.env('nomePasta')}/extension/desktop/`);

    Esperar.por_segundos(1);

    return;
  };

  /**
   * Informe o codigo da instiuicao
   * @param {int} cod_instituicao Recebe 1, 2, 3, 4, 5...
   */
  static instituicao = (cod_instituicao) => {
    this.define.instituicao = new Instituicao(cod_instituicao);

    return;
  };

  /**
   * @param {Area} area 
   */
  static area = (area) => {
    this.define.area = area;
    
    return;
  }

  /**
   * @param {Modulo} modulo
   * @returns {Modulo} 
   */
  static modulo = (modulo) => {
    this.define.modulo = modulo;
    
    this.inicia_navegacao();

    return modulo;
  }

  /**
   * Acessa a rotina pela descricao do menu
   * @param {string} descricao Informar a descricao do menu
   */
  static acessar_rotina = (descricao) => {
    return Clicar.na_descricao(descricao);
  };

  /**
   * Define a resolucao da tela - Padrao 1600x900
   * @param {int|null} largura Largura da resolucao
   * @param {int|null} altura Altura da resolucao
   */
  static define_resolucao = (largura = null, altura = null) => {
    return cy.viewport(largura ?? 1600, altura ?? 900);
  };

  static inicia_navegacao = () => {
    this.define_resolucao();
    
    Clicar.na_descricao('MENU');
    
    Object.entries(this.define).forEach(([nome, valor]) => {
      if (valor === null) {
        throw new Error(`${nome} não definido(a)! Verifique.`);
      }
      
      valor.abrir();
    });
  }
};
