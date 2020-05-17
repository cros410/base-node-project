import { EntitySchema } from 'typeorm'
import User from '../../../models/User'

module.exports = new EntitySchema({
  name: 'User',
  target: User,
  columns: {
    email: {
      primary: true,
      type: 'varchar'
    },
    password: {
      type: 'varchar'
    }
  }
})
