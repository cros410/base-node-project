import CustomerRepository from '../src/data-access/customerRepository'

jest.mock('./../src/data-access/customerRepository')

describe('now', () => {
  it('not now', async () => {
    const customerRepository = new CustomerRepository()
    customerRepository.searchAll.mockResolvedValue({ name: 'christian' })
    console.log(await customerRepository.searchAll())
  })
})
