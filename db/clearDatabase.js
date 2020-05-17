import * as typeorm from 'typeorm'
import User from '../src/data-access/MemoryUserRepository/typeorm/user.entity'

export default async () => {
  const connection = await typeorm.createConnection({
    type: 'sqlite',
    database: './database.sqlite',
    synchronize: true,
    logging: false,
    entities: ['src/**/**.entity.js']
  })
  await connection
    .createQueryBuilder()
    .delete()
    .from(User)
    .execute()
  await connection.close()
}
