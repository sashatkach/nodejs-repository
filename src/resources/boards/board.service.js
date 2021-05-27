import boardRepo  from './board.memory.repository.js';

/**
 * Call board repository and get all entities
 * @returns {Board[]} return array of boards from repository
 */
const getAll = () => boardRepo.getAll();

/**
 * Get Board by id
 * @param {string} id receive id of entity
 * @returns {Board} return entity of board
 */
const getById = (id) => boardRepo.getById(id);

/**
 * Func which create board in repository
 * @param {BoardFields} boardFields receive board fields from request
 * @returns {Board} return created board in repository
 */
const create = (boardFields) => boardRepo.create(boardFields);

/**
 * Func which update board in repository
 * @param {string} id receive id of entity
 * @param {BoardFields} boardFields boardFields receive board fields from request
 * @returns {Board} return updated board in repository
 */
const update = (id, boardFields) => boardRepo.update(id, boardFields);

/**
 * Func which delete board from repository
 * @param {string} id receive id of entity
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
const remove = (id) => boardRepo.remove(id);

export default { getAll, getById, create, update, remove };
