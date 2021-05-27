import { boards } from '../../generators/board.generator.js';
import columnRepo from '../columns/column.memory.repository.js';
import taskRepo  from '../tasks/task.memory.repository.js';
import { Board } from './board.model.js';

/**
 * Grab all entities from db or from memory
 * @returns {Board[]} return all array from db or from memory
 */
const getAll = async () => boards;

/**
 * Func is looking Board entity from db
 * @param {string} id  id of object in db 
 * @returns {Board} return Board object
 */
const getById =  async (id) => boards.find(board => board.id === id);

/**
 * Func which create board entity in db
 * @param {BoardFields} boardFields board fields from request
 * @returns {Board} return created board
 */
const create = async (boardFields) => {
  const board = new Board(boardFields)
  boards.push(board);
  return board;
}

/**
 * Func which updated board
 * @param {string} id id of object in db 
 * @param {boardFields} boardFields board fields from request
 * @returns {Board} return updated board
 */
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

/**
 * Func which delete board from db
 * @param {string} id id of object in db
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
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

export default { getAll, getById, create, update, remove};
