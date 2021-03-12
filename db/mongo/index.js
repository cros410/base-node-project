import { MongoClient } from 'mongodb'
import { glob } from 'glob'
import { basename, extname } from 'path'

MongoClient.connect('mongodb://localhost:27017').then(async client => {
  console.log('Connected successfully to server')
  const db = client.db('mooc')
  glob(`${__dirname}/data/*.json`, async (error, files) => {
    if (error) {
      console.log(error)
      process.exit((0))
    }
    for (const file of files) {
      const data = require(file)
      const collectionName = basename(file, extname(file))
      const collection = db.collection(collectionName)
      try {
        await collection.drop()
      } catch (error) {}
      await collection.insertMany(data)
    }
    client.close()
  })
}).catch(error => {
  console.log(error)
  process.exit(0)
})
