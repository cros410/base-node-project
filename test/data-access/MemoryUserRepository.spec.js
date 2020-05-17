import MemoryUserRepository from '../../src/data-access/MemoryUserRepository'
import clearDatabase from '../../db/clearDatabase'

beforeAll(async () => {
  await clearDatabase()
})

describe('Should validate user repository', () => {
  it.only('Should save user', async () => {
    const user = { email: 'name@mailll.com', password: '123' }
    const repository = await MemoryUserRepository()
    await repository.save(user)
    const savedUser = await repository.findOne({ email: user.email })
    expect(user).toEqual(savedUser)
  })
})
