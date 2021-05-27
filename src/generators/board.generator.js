import * as FakerModule from 'faker';
import { columns }  from './column.generator.js';
import { Board } from '../resources/boards/board.model.js';

const faker = FakerModule.default;

const DEFAULT_AMOUNT_BOARDS = 5;

const boards = [];

/**
 * Generate array of boards with random filling
 * @return {Board[]} return array of random generated boards
 */
(function()
{
  for(let i = 0; i < DEFAULT_AMOUNT_BOARDS; i += 1)
  {
    const tmpColumns = [];
    for(let j = 0; j < Math.floor(Math.random() * columns.length); j += 1)
    {
      tmpColumns.push(columns[Math.floor(Math.random() * columns.length)]);
    }
    
    boards.push(new Board({
      title: faker.company.companyName(),
      columns: tmpColumns
    }))
  }
})();

export { boards };