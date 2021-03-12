import { MongoClient } from 'mongodb'

export default class MongoClientFactory {
  static async createClient (url) {
    if (this.client) {
      return this.client
    }
    const client = new MongoClient(url, {
      useUnifiedTopology: true,
      ignoreUndefined: true
    })
    this.client = await client.connect()
    return this.client
  }
}
