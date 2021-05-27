import { v4 } from 'uuid';

class Task {
  constructor({
    id = v4(),
    title = 'DEFAULT TASK',
    order = 'DEFAULT ORDER',
    description = 'SOME DESCRIPTION',
    userId =  null,
    boardId = null,
    columnId = null
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export { Task };
