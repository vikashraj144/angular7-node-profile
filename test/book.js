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
  it.skip() you can skipe a test
  */
  describe('1./GET all /api/books', () => {
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
  describe('2./GET book by id /api/books', () => {
    it('it should GET by book id', (done) => {
      chai.request(server)
          .get('/api/books')
          .query({bookID:'2'})
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
    it('3.it should update book by PUT method',(done) => {
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
     /* 
      Test for add book by /POST Promises
      */
     it.skip('4.it should add book by POST method Promises',(done) => {
      chai.request(server)
      .post('/api/books/addBook')
      .type('form')
      .send({
        "title": "sun", 
        "author": "vikask", 
        "publicationYear": 2019
      })
      .then( (res) => 
        expect(res).to.have.status(200),
        done()
      )
      .catch( (err) => {
        throw err;
      })
    })

    /* 
      Test for delete book by /delete Promises
      */
     it('4.it should delete book by delete method',(done) => {
      chai.request(server)
      .delete('/api/books/deleteBook')
      .type('form')
      .send({
        "bookID": 15
      })
      .then( (res) => 
        expect(res).to.have.status(200),
        done()
      )
      .catch( (err) => {
        throw err;
      })
    })
    
    /* Testing end here */
    
  });

});
