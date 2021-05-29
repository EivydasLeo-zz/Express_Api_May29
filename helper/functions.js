const todoDb = require('../db/todoDb');

function findTodoWithId(id) {
  console.log('findTodoWithId runs');
  return todoDb.find((t) => t.id === +id);
}

function handleFindErr(paramId, res) {
  console.log('todo not found');
  return res.status(400).json({ error: `todo with id: ${paramId} does not exist` });
}

module.exports = {
  findTodoWithId,
  handleFindErr,
};
