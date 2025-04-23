


const request = require('supertest');
const app = require('../server');

describe('API Endpoints', () => {
  it('GET /api should return success', async () => {
    const res = await request(app)
      .get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});