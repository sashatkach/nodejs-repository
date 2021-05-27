import taskRepo from './task.memory.repository.js';

const getAll = (boardId) => taskRepo.getAll(boardId);

const getById = (taskId, boardId) => taskRepo.getById(taskId, boardId);

const create = (boardId, taskFields) => taskRepo.create(boardId, taskFields);

const update = (taskId, boardId, taskFields) => taskRepo.update(taskId, boardId, taskFields);

const remove = (taskId) => taskRepo.remove(taskId);

export default { getAll, getById, create, update, remove };
