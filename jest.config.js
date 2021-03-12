require('dotenv').config()

module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'node'
  }
}
