import MysqlUserRepository from '../../src/data-access/MysqlUserRepository'

beforeAll(async () => {})

describe('Should validate user repository', () => {
  it.only('Should save user', async () => {
    const user = { email: 'name@mailll.com', password: '123' }
    const repository = await MysqlUserRepository()
    await repository.save(user)
    const savedUser = await repository.findOne({ email: user.email })
    expect(user).toEqual(savedUser)
  })
})
