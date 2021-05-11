const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (userFields) => usersRepo.create(userFields);

const update = (id, userFields) => usersRepo.update(id, userFields);

const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
