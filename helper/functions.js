const todoDb = require('../db/todoDb');

function findTodoWithId(id) {
  console.log('findTodoWithId runs');
  return todoDb.find((t) => t.id === +id);
}

function handleFindErr(paramId, res) {
  console.log('todo not found');
  return res.status(400).json({ error: `todo with id: ${paramId} does not exist` });
}

function handleDelete(found) {
  // todel kad musu TodoDb yra const, mes rasim norimo istrinti index ir pasalinsim is masyvo.
  const index = todoDb.indexOf(found);
  todoDb.splice(index, 1);
}

function addNewTodo(title, id) {
  const newTodo = {
    id: id,
    title: title,
    done: false,
  };
  todoDb.push(newTodo);
}

module.exports = {
  findTodoWithId,
  handleFindErr,
  handleDelete,
  addNewTodo,
};
