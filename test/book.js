/* 
Unit test case for api
*/

process.env.NODE_ENV = 'test';
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
var expect = chai.expect;
var assert = chai.assert;

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
    
      /* 
      Test for updating the book by /PUT
      */
    it('it should update book by PUT method',(done) => {
      chai.request(server)
      .put('/api/books/updateBook')
      .send({
        "bookID": 1, 
        "title": "Marie", 
        "author": "argaret", 
        "publicationYear": 2018
      })
      .end((err,res) => {
        // res.should.have.status(200);
        expect(res).to.have.status(200);
        done();
      })
    })
    
  });

});
