const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
    it('should return Hello, CI/CD!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message', 'Hello, CI/CD!');
    });
});