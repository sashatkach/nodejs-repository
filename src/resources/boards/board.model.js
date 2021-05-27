import { v4 } from 'uuid';

/**
 * Class which represents Board entity in db/
 */
class Board {
  constructor({
    id = v4(),
    title = 'Column Title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export { Board };
