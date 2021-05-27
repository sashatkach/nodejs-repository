import columnsRepo from './column.memory.repository.js';

/**
 * Call board repository and get all entities
 * @returns {Column[]} return array of boards from repository
 */
const getAll = () => columnsRepo.getAll();

/**
 * Get Column by id
 * @param {string} id receive id of entity
 * @returns {Column} return entity of board
 */
const getById = (id) => columnsRepo.getById(id);

/**
 * Func which create board in repository
 * @param {ColumnFields} columnFields receive column fields from request
 * @returns {Column} return created column in repository
 */
const create = (columnFields) => columnsRepo.create(columnFields);

/**
 * Func which update column in repository
 * @param {string} id receive id of entity
 * @param {ColumnFields} columnFields columnFields receive column fields from request
 * @returns {Column} return updated column in repository
 */
const update = (id, columnFields) => columnsRepo.update(id, columnFields);

/**
 * Func which delete column from repository
 * @param {string} id receive id of entity
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
const remove = (id) => columnsRepo.remove(id);

export default { getAll, getById, create, update, remove };
