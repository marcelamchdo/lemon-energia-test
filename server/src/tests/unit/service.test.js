import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import validationClient from '../../services/clientValidation.js';

chai.use(chaiHttp)

describe('Testing validationClient service', () => {
  describe('Should validate a client', () => {
    it('POST a elegible client', () => {
      const elegible = {
        "numeroDoDocumento": "14041737706",
        "tipoDeConexao": "bifasico",
        "classeDeConsumo": "comercial",
        "modalidadeTarifaria": "convencional",
        "historicoDeConsumo": [
          3878,
          9760, 
          5976, 
          2797, 
          2481, 
          5731, 
          7538, 
          4392, 
          7859, 
          4160, 
          6941, 
          4597  
        ],
      };
      const result = validationClient(elegible);
      expect(result).to.have.property('elegivel').to.be.true;
      expect(result).to.have.property('economiaAnualDeCO2').to.not.be.false;
      expect(result).to.have.property('inegibility').to.be.false;
    });
  
    it('POST a non-elegible client', () => {
      const nonElegible = {
        "numeroDoDocumento": "14041737706",
        "tipoDeConexao": "bifasico",
        "classeDeConsumo": "rural",
        "modalidadeTarifaria": "verde",
        "historicoDeConsumo": [
          3878,
          9760, 
          5976, 
          2797, 
          2481, 
          5731, 
          7538, 
          4392, 
          7859, 
          4160, 
          6941, 
          4597  
        ],
      };
      const result = validationClient(nonElegible);
      expect(result).to.have.property('elegivel').to.be.false;
      expect(result).to.have.property('economiaAnualDeCO2').to.be.false;
      expect(result).to.have.property('inegibility').to.not.be.false;
    });
  });
});

describe('Service layer tests', () => {
  describe('Validation of class of consumption', () => {
    it('Should return "Sua classe de consumo não é válida!" for invalid class of consumption', () => {
      const client = {
        classeDeConsumo: 'rural',
        modalidadeTarifaria: 'convencional',
        tipoDeConexao: 'bifasico',
        historicoDeConsumo: [1000, 2000, 3000]
      };
      const result = validationClient(client);
      expect(result.inegibility[0]).to.equal('Sua classe de consumo não é válida!');
    });

    it('Should return "elegivel: true" for valid class of consumption', () => {
      const client = {
        classeDeConsumo: 'residencial',
        modalidadeTarifaria: 'convencional',
        tipoDeConexao: 'bifasico',
        historicoDeConsumo: [1000, 2000, 3000]
      };
      const result = validationClient(client);
      expect(result.elegivel).to.equal(true);
    });
  });
})

describe('Validation of modalidade tarifária', () => {
  it('Should return "Sua modalidade tarifária não é válida!" for invalid modalidade tarifária', () => {
    const client = {
      classeDeConsumo: 'residencial',
      modalidadeTarifaria: 'azul',
      tipoDeConexao: 'bifasico',
      historicoDeConsumo: [1000, 2000, 3000]
    };
    const result = validationClient(client);
    expect(result.inegibility[0]).to.equal('Sua modalidade tarifária não é válida!');
  });
  it('Should return "elegivel: true" for valid modalidade tarifária', () => {
    const client = {
      classeDeConsumo: 'residencial',
      modalidadeTarifaria: 'branca',
      tipoDeConexao: 'bifasico',
      historicoDeConsumo: [1000, 2000, 3000]
    };
    const result = validationClient(client);
    expect(result.elegivel).to.equal(true);
  });
});

