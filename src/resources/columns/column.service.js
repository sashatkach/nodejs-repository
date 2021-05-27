import columnsRepo from './column.memory.repository.js';

const getAll = () => columnsRepo.getAll();

const getById = (id) => columnsRepo.getById(id);

const create = (columnFields) => columnsRepo.create(columnFields);

const update = (id, columnFields) => columnsRepo.update(id, columnFields);

const remove = (id) => columnsRepo.remove(id);

export default { getAll, getById, create, update, remove };
