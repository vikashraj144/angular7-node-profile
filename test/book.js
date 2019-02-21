/* 
Unit test case for api
*/

process.env.NODE_ENV = 'test';
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
    
/*
  * Test the /GET route
  */
  describe('/GET /api/books', () => {
      it('it should GET all the books', (done) => {
        chai.request(server)
            .get('/api/books')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                // res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  /*
  * Test the /GET Book by idroute
  */
  describe('/GET /api/books', () => {
    it('it should GET by book id', (done) => {
      chai.request(server)
          .get('/api/books')
          .query({bookID:'1'})
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              // res.body.length.should.be.eql(0);
            done();
          });
    });


  });

});
