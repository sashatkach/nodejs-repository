import { users } from '../../generators/user.generator.js';
import taskRepo  from '../tasks/task.memory.repository.js';
import { User } from './user.model.js';

/**
 * Grab all entities from db or from memory
 * @returns {User[]} return all array from db or from memory
 */
const getAll = async () => users;

/**
 * Func is looking User entity from db
 * @param {string} id  id of user in db
 * @returns {User} return User object
 */
const getById = async (id) => users.find(user => user.id === id);

const create = async (userFields) => {
  const user = new User(userFields)
  users.push(user);
  return user;
}

const update = async (id, userFields) => {
  const userUpdated = users.find(user => user.id === id);
  if(!userUpdated) {return null;}
  const keys = Object.keys(userFields);
  for(let i = 0; i < keys.length; i += 1)
  {
    userUpdated[keys[i]] = userFields[keys[i]];
  }
  return userUpdated;
}

const remove = async (id) => {
  const index = users.map(user => user.id).indexOf(id);
  if(index === -1)
  {
    return false;
  }
  await taskRepo.setTasksUserNullOnDelete(users[index].id);
  users.splice(index, 1);
  return true;
}

export default { getAll, getById, create, update, remove};
