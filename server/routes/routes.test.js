const request = require('supertest')
const app = require('../app')
describe('Get Endpoint', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/api/farmers')
      .send({
        userId: 1,
        title: 'test is cool',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('get')
  })
})