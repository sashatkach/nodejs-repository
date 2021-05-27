import { columns } from '../../generators/column.generator.js';
import { Column } from './column.model.js';

/**
 * Grab all entities from db or from memory
 * @returns {Column[]} return all array from db or from memory
 */
const getAll = async () => columns;

/**
 * Func is looking Column entity from db
 * @param {string} id  id of column in db
 * @returns {Column} return Column object
 */
const getById =  async (id) => columns.find(column => column.id === id);

/**
 * Func which create column entity in db
 * @param {ColumnFields} columnFields board fields from request
 * @returns {Column} return created board
 */
const create = async (columnFields) => {
  const column = new Column(columnFields)
  columns.push(column);
  return column;
}

/**
 * Func which updated column
 * @param {string} id id of column in db 
 * @param {ColumnFields} columnFields column fields from request
 * @returns {Column} return updated column
 */
const update = async (id, columnFields) => {
  const columnUpdated = columns.find(column => column.id === id);
  if(!columnUpdated) {return null;}
  const keys = Object.keys(columnFields);
  for(let i = 0; i < keys.length; i += 1)
  {
    columnUpdated[keys[i]] = columnFields[keys[i]];
  }
  return columnUpdated;
}

/**
 * Func which delete column from db
 * @param {string} id id of column in db
 * @returns {boolean} if deleted was succeeded return true elsewhere false
 */
const remove = async (id) => {
  const index = columns.map(column => column.id).indexOf(id);
  if(index === -1)
  {
    return false;
  }

  columns.splice(index, 1);
  return true;
}
/**
 * This func deletes column by title
 * @param {string} title Field of column from db
 * @return {void} No return 
 */
const removeByTitle = async (title) => {
  const index = columns.map(column => column.title).indexOf(title);
  columns.splice(index, 1);
}

export default { getAll, getById, create, update, remove, removeByTitle};
