const faker = require('faker');
const uuid = require('uuid').v4;
const User = require('../resources/users/user.model');


const users = [];
const DEFAULT_AMOUNT_USERS = 10;

for(let i = 0; i < DEFAULT_AMOUNT_USERS; i += 1)
{
  users.push(new User({
    id: uuid(),
    name: faker.name.firstName(),
    login: faker.name.findName(),
    password: faker.internet.password(),
  }));
}

module.exports = users;