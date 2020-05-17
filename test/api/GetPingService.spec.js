import request from 'supertest'
import app from '../../src/api'

describe('Get Ping service', () => {
  it('Should resolve 200 status', async () => {
    const res = await request(app)
      .get('/ping')
      .send()
    expect(res.statusCode).toEqual(200)
  })
})
