import MongoClientFactory from './mongoClientFactory'

export default class MongoRepository {
  constructor (database, collectionName) {
    this.database = database
    this.collectionName = collectionName || database
  }

  async client () {
    return MongoClientFactory.createClient(
      process.env.MONGO_URL
    )
  }

  async collection () {
    const client = await this.client()
    return client.db(this.database).collection(this.collectionName)
  }

  async close () {
    const client = await this.client()
    client.close()
  }
}
