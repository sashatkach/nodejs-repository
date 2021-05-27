import * as FakerModule from 'faker';
import { Column } from '../resources/columns/column.model.js';

const faker = FakerModule.default;

const columns = [];
const DEFAULT_AMOUNT_COLUMNS = 10;

/**
 * Generate array of columns with random filling
 * @return {Column[]} return array of random generated columns
 */
(function(){
  for(let i = 0; i < DEFAULT_AMOUNT_COLUMNS; i += 1)
  {
    columns.push(new Column({
      title: faker.company.companyName(),
      order: faker.datatype.number(1, 10)
    }));
  }
})()

export { columns };