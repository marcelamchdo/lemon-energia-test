import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app.js';

chai.use(chaiHttp)

describe("Testing post route", () => {
  describe("Should post a client and return elegibility true and anual consumption", () => {
    it("POST a elegible client", done => {
      const elegible = {
        numeroDoDocumento: "14041737706",
        tipoDeConexao: "bifasico",
        classeDeConsumo: "comercial",
        modalidadeTarifaria: "convencional",
        historicoDeConsumo: [
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
        ]
      };

      chai
        .request(app)
        .post("/")
        .send(elegible)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });
});

describe('Testing getAll route', () => {
  describe('Should get all clients', () => {
    it('GET all clients', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          if (err) {
            expect(err).to.have.status(500);
            expect(res.body).to.be.a("object");
          } else {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("array");
            done();
          }
      });
    });
  });
});