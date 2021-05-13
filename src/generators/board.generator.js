const faker = require('faker');
const uuid = require('uuid').v4;
const columns  = require('./column.generator');
const Board = require('../resources/boards/board.model');

const DEFAULT_AMOUNT_BOARDS = 5;

const boards = [];

for(let i = 0; i < DEFAULT_AMOUNT_BOARDS; i += 1)
{
  const tmpColumns = [];
  for(let j = 0; j < Math.floor(Math.random() * columns.length); j += 1)
  {
    tmpColumns.push(columns[Math.floor(Math.random() * columns.length)]);
  }
  
  boards.push(new Board({
    id: uuid(),
    title: faker.company.companyName(),
    columns: tmpColumns
  }))
}

module.exports = boards;