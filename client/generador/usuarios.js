const faker = require('faker');
const get = () => ({
  email : faker.internet.email(),
  username : faker.name.fullname(),
  password : faker.internet.password()
});

module.exports = get