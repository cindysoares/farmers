const request = require('supertest')
const app = require('../../app')
describe('Get Endpoint', () => {
  test('should return a farmer', done => {
    return request(app)
      .get('/api/farmers')
      .then( response => {
        expect(response.statusCode).toBe(200)
        done()
      })
  })
})