const columnsRepo = require('./column.memory.repository');

const getAll = () => columnsRepo.getAll();

const getById = (id) => columnsRepo.getById(id);

const create = (columnFields) => columnsRepo.create(columnFields);

const update = (id, columnFields) => columnsRepo.update(id, columnFields);

const remove = (id) => columnsRepo.remove(id);

module.exports = { getAll, getById, create, update, remove };
