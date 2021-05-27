import { tasks } from '../../generators/task.generator.js';
import { Task } from './task.model.js';

const getAll = async (boardId) => tasks.filter(task => task.boardId === boardId);

const getById =  async (taskId, boardId) => tasks.filter(task => task.boardId === boardId).find(task => task.id === taskId)

const create = async (boardId, taskFields) => {
  const mergedTaskField = {
    ...taskFields,
    boardId
  }
  const task = new Task(mergedTaskField)
  tasks.push(task);
  return task;
}

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

const remove = async (taskId) => {
  const index = tasks.map(task => task.id).indexOf(taskId);
  if(index === -1)
  {
    return false;
  }

  tasks.splice(index, 1);
  return true;
}

const setTasksUserNullOnDelete = async (userId) => { 
  const usersTasks = tasks.filter(task => task.userId === userId)
  for(let i = 0; i < usersTasks.length; i += 1)
  {
    usersTasks[i].userId = null;
  }
}

export default { getAll, getById, create, update, remove,  setTasksUserNullOnDelete};
