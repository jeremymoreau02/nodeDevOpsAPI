process.env.NODE_ENV = 'test';

let Task = require('../models/task');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();

chai.use(chaiHttp);

describe('Task', () => {
/*
  * Test the /GET route
  */
  describe('/GET Task', () => {
      it('it should GET all the tasks', (done) => {
        chai.request(server)
            .get('/tasks')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
              done();
            });
      });
  });

});