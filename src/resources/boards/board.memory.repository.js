const boards = require('../../generators/board.generator');
const columnRepo = require('../columns/column.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');
const Board = require('./board.model');

const getAll = async () => boards;

const getById =  async (id) => boards.find(board => board.id === id);

const create = async (boardFields) => {
  const board = new Board(boardFields)
  boards.push(board);
  return board;
}

const update = async (id, boardFields) => {
  const boardUpdated = boards.find(board => board.id === id);
  if(!boardUpdated) {return null;}
  const keys = Object.keys(boardFields);
  for(let i = 0; i < keys.length; i += 1)
  {
    boardUpdated[keys[i]] = boardFields[keys[i]];
  }
  return boardUpdated;
}

const remove = async (id) => {
  const index = boards.map(board => board.id).indexOf(id);
  if(index === -1)
  {
    return false;
  }

  if(boards[index].columns.length > 0){
    for(let i = 0; i < boards[index].columns.length; i += 1){
      columnRepo.removeByTitle(boards[index].columns[i].title);
    }
  }
  
  const deletedTasks = await taskRepo.getAll(boards[index].id);
  
  for(let i = 0; i < deletedTasks.length; i += 1)
  {
    taskRepo.remove(deletedTasks[i].id);
  }

  boards.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove};
