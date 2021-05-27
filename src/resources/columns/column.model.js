import { v4 } from 'uuid';

/**
 * This class describes column in db
 */
class Column {
  constructor({
    id = v4(),
    title = 'Column Title',
    order = 'Order name',
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export { Column };
