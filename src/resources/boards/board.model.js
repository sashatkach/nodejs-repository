const uuid = require('uuid').v4;

class Board {
  constructor({
    id = uuid(),
    title = 'Column Title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
