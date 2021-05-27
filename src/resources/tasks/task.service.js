import taskRepo from './task.memory.repository.js';

/**
 * Call task repository and get all entities
 * @param {string} boardId Id of tasks entity
 * @returns {Task[]} return array of tasks from repository
 */
const getAll = (boardId) => taskRepo.getAll(boardId);

/**
 * Get task by id
 * @param {string} taskId receive id of task entity
 * @param {string} boardId receive id of task entity
 * @returns {Task} return entity of task
 */
const getById = (taskId, boardId) => taskRepo.getById(taskId, boardId);

/**
 * Func which create task in repository
 * @param {string} boardId receive id of board entity
 * @param {TaskFields} taskFields receive task fields from request
 * @returns {Task} return created task in repository
 */
const create = (boardId, taskFields) => taskRepo.create(boardId, taskFields);

/**
 * Func which update task in repository
 * @param {string} taskId receive id of task entity
 * @param {string} boardId receive id of board entity
 * @param {TaskFields} taskFields receive task fields from request
 * @returns {Task} return updated task in repository
 */
const update = (taskId, boardId, taskFields) => taskRepo.update(taskId, boardId, taskFields);

/**
 * Func which delete task from repository
 * @param {string} id receive id of task entity
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
const remove = (taskId) => taskRepo.remove(taskId);

export default { getAll, getById, create, update, remove };
