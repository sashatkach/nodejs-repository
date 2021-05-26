const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getById = (id) => boardRepo.getById(id);

const create = (columnFields) => boardRepo.create(columnFields);

const update = (id, columnFields) => boardRepo.update(id, columnFields);

const remove = (id) => boardRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
