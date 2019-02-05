const chai = require('chai');
const supertest = require("supertest");
const expect = chai.expect;

const server = supertest.agent("http://localhost:8000");

// see docs -> 
// https://github.com/chaijs/chai-http/issues/179
// https://github.com/chaijs/chai-http

describe('HelloWorld', () => {
  it('Should successfully return gretting', () => {
    return server
    .get('/api/hello')
    .then(function(res) {
      expect(res.status).to.eql(200);
      expect(res.body).to.eql({'express': 'Hello From Express'})
    });
  });
})
