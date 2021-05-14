const taskRepo = require('./task.memory.repository');

const getAll = (boardId) => taskRepo.getAll(boardId);

const getById = (taskId, boardId) => taskRepo.getById(taskId, boardId);

const create = (boardId, taskFields) => taskRepo.create(boardId, taskFields);

const update = (taskId, boardId, taskFields) => taskRepo.update(taskId, boardId, taskFields);

const remove = (taskId) => taskRepo.remove(taskId);

module.exports = { getAll, getById, create, update, remove };
