const faker = require('faker');
const uuid = require('uuid').v4;
const users = require('./user.generator');
const columns = require('./column.generator');
const boards = require('./board.generator');
const Task = require('../resources/tasks/task.model');

const tasks = [];

const DEFAULT_AMOUNT_TASKS = 10;

for(let i = 0; i < DEFAULT_AMOUNT_TASKS; i += 1)
{
    tasks.push(new Task({
      id: uuid(),
      title: faker.lorem.words(),
      description: faker.lorem.words(),
      order: faker.datatype.number(1, 10),
      userId: users[Math.floor(Math.random() * users.length)].id,
      columnId: columns[Math.floor(Math.random() * columns.length)].id,
      boardId: boards[Math.floor(Math.random() * boards.length)].id
    }));
}

module.exports = tasks;