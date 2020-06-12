var app = require('../src/server'),
  chai = require('chai'),
  request = require('supertest');

describe('Testes de usuários', function() {
  it('Criação de usuários', function(done) {
  request(app)
    .post('app/users/')
    .send({name: 'Guilherme', phone: '11952749790', email: 'user@email.com'})
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function(err, res) {
      if (err) return done(err);
      done();
    });
  });
});