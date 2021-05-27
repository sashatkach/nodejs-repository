import { columns } from '../../generators/column.generator.js';
import { Column } from './column.model.js';

const getAll = async () => columns;

const getById =  async (id) => columns.find(column => column.id === id);

const create = async (columnFields) => {
  const column = new Column(columnFields)
  columns.push(column);
  return column;
}

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

const remove = async (id) => {
  const index = columns.map(column => column.id).indexOf(id);
  if(index === -1)
  {
    return false;
  }

  columns.splice(index, 1);
  return true;
}

const removeByTitle = async (title) => {
  const index = columns.map(column => column.title).indexOf(title);
  columns.splice(index, 1);
}

export default { getAll, getById, create, update, remove, removeByTitle};
