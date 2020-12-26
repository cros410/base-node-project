import * as typeorm from 'typeorm'
import User from '../../models/User'

export default async () => {
  const connection = await typeorm.createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'base',
    synchronize: true,
    logging: false,
    entities: ['src/**/**.entity.js']
  })
  const repository = connection.getRepository(User)
  const save = async user => {
    await repository.save(user)
  }
  const findOne = async filter => {
    return repository.findOne(filter)
  }
  return Object.freeze({
    save,
    findOne
  })
}
