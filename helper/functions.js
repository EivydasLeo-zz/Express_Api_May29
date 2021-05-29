const todoDb = require('../db/todoDb');

function findTodoWithId(id) {
  console.log('findTodoWithId runs');
  return todoDb.find((t) => t.id === +id);
}

module.exports = {
  findTodoWithId,
};
