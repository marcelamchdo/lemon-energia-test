import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../api/app.js';

const should = chai.should();
chai.use(chaiHttp);

describe('Testing post route', () => {
  describe('Should post a client and return if elegible or not', () => {
    it('POST a elegible client', (done) => {
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
      chai
        .request(app)
        .post('/')
        .send(elegible)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});