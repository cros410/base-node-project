import MongoRepository from '../../../shared/infrastructure/persistence/mongo/mongoRepository'

export default class CourseMongoRepository extends MongoRepository {
  constructor () {
    super('mooc', 'course')
  }

  async find () {
    const collection = await this.collection()
    return collection.find().toArray()
  }

  async create (course) {
    const collection = await this.collection()
    await collection.insertOne(course)
  }
}
