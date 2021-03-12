export default class CustomerRepository {
  async searchAll () {
    return new Promise(resolve => {
      resolve([
        {
          name: 'Christian',
          lastName: 'Valencia'
        }
      ])
    })
  }
}
