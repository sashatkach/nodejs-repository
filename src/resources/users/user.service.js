import usersRepo  from './user.memory.repository.js';

/**
 * Call user repository and get all entities
 * @returns {User[]} return array of tasks from repository
 */
const getAll = () => usersRepo.getAll();

/**
 * Get user by id
 * @param {string} id receive id of user entity
 * @returns {User} return entity of user
 */
const getById = (id) => usersRepo.getById(id);

/**
 * Func which create user in repository
 * @param {UserFields} userFields receive user fields from request
 * @returns {User} return created user in repository
 */
const create = (userFields) => usersRepo.create(userFields);

/**
 * Func which update user in repository
 * @param {string} id receive id of user entity
 * @param {UserFields} userFields userFields receive user fields from request
 * @returns {User} return updated user in repository
 */
const update = (id, userFields) => usersRepo.update(id, userFields);


/**
 * Func which delete user from repository
 * @param {string} id receive id of user entity
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
const remove = (id) => usersRepo.remove(id);

export default { getAll, getById, create, update, remove };
