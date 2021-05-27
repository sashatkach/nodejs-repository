import * as FakerModule from 'faker';
import { User } from '../resources/users/user.model.js';

const faker = FakerModule.default;


const users = [];
const DEFAULT_AMOUNT_USERS = 10;

/**
 * Generate array of users with random filling
 * @return {Column[]} return array of random generated users
 */
(function()
{
  for(let i = 0; i < DEFAULT_AMOUNT_USERS; i += 1)
  {
    users.push(new User({
      name: faker.name.firstName(),
      login: faker.name.findName(),
      password: faker.internet.password(),
    }));
  }
})();

export { users };