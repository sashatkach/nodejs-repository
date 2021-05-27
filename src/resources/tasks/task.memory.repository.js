import { tasks } from '../../generators/task.generator.js';
import { Task } from './task.model.js';

/**
 * Func which process boardId and return tasks array
 * @param {string} boardId Receive board's id
 * @returns {Task[]} return all task from certain board
 */
const getAll = async (boardId) => tasks.filter(task => task.boardId === boardId);

/**
 * Func which return a task by certain task id and board id
 * @param {string} taskId Receive a task id
 * @param {string} boardId Receive a board id
 * @returns {Task} return task entity
 */
const getById =  async (taskId, boardId) => tasks.filter(task => task.boardId === boardId).find(task => task.id === taskId)

/**
 * Func which create task entity in db
 * @param {string} boardId 
 * @param {TaskFields} taskFields 
 * @returns {Task} return created task entity
 */
const create = async (boardId, taskFields) => {
  const mergedTaskField = {
    ...taskFields,
    boardId
  }
  const task = new Task(mergedTaskField)
  tasks.push(task);
  return task;
}

/**
 * Func which updated task
 * @param {string} taskId id of task in db
 * @param {string} boardId id of board in db
 * @param {TaskFields} taskFields task fields from request
 * @returns {Task} return updated task
 */
const update = async (taskId, boardId, taskFields) => {
  const taskUpdated = tasks.find(task => task.id === taskId);
  if(!taskUpdated) {return null;}
  const keys = Object.keys(taskFields);
  for(let i = 0; i < keys.length; i += 1)
  {
    taskUpdated[keys[i]] = taskFields[keys[i]];
  }
  return taskUpdated;
}


/**
 * Func which delete task from db
 * @param {string} taskId id of task in db
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
const remove = async (taskId) => {
  const index = tasks.map(task => task.id).indexOf(taskId);
  if(index === -1)
  {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

/**
 * Func which set task's field userId in null
 * @param {string} userId id of user in db
 * @returns {void} return nothing
 */
const setTasksUserNullOnDelete = async (userId) => { 
  const usersTasks = tasks.filter(task => task.userId === userId)
  for(let i = 0; i < usersTasks.length; i += 1)
  {
    usersTasks[i].userId = null;
  }
}

export default { getAll, getById, create, update, remove,  setTasksUserNullOnDelete};
