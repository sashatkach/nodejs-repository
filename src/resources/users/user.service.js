import usersRepo  from './user.memory.repository.js';

const getAll = () => usersRepo.getAll();

const getById = (id) => usersRepo.getById(id);

const create = (userFields) => usersRepo.create(userFields);

const update = (id, userFields) => usersRepo.update(id, userFields);

const remove = (id) => usersRepo.remove(id);

export default { getAll, getById, create, update, remove };
