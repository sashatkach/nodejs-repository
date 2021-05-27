import * as FakerModule from 'faker';
import { users } from './user.generator.js';
import { columns } from './column.generator.js';
import { boards } from './board.generator.js';
import { Task } from '../resources/tasks/task.model.js';

const faker = FakerModule.default;

const tasks = [];

const DEFAULT_AMOUNT_TASKS = 10;

/**
 * Generate array of tasks with random filling
 * @return {Column[]} return array of random generated tasks
 */
(function()
{
  for(let i = 0; i < DEFAULT_AMOUNT_TASKS; i += 1)
  {
      tasks.push(new Task({
        title: faker.lorem.words(),
        description: faker.lorem.words(),
        order: faker.datatype.number(1, 10),
        userId: users[Math.floor(Math.random() * users.length)].id,
        columnId: columns[Math.floor(Math.random() * columns.length)].id,
        boardId: boards[Math.floor(Math.random() * boards.length)].id
      }));
  }
})()

export { tasks };