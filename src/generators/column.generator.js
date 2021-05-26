const faker = require('faker');
const uuid = require('uuid').v4;
const Column = require('../resources/columns/column.model');

const columns = [];
const DEFAULT_AMOUNT_COLUMNS = 10;

for(let i = 0; i < DEFAULT_AMOUNT_COLUMNS; i += 1)
{
  columns.push(new Column({
    id: uuid(),
    title: faker.company.companyName(),
    order: faker.datatype.number(1, 10)
  }));
}

module.exports = columns;