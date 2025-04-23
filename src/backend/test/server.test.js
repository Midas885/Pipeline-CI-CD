


const request = require('supertest');
const app = require('../server');

let server;

beforeAll((done) => {
  server = app.listen(3000, done);
});

afterAll((done) => {
  server.close(done);
});

describe('API Endpoints', () => {
  it('GET /api should return success', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});