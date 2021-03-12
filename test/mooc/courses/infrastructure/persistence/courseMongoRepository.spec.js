import CourseMongoRepository from '../../../../../src/mooc/courses/infrastructure/persistence/courseMongoRepository'

describe('now', () => {
  it('not now', async () => {
    const courseRepository = new CourseMongoRepository()
    const courses = await courseRepository.find()
    console.log(courses)
    await courseRepository.close()
  })
})
