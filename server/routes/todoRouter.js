import express from 'express';
import {
  createTodo,
  deleteTodoById,
  editTodoById,
  getTodoById,
  getTodos,
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);

router.get('/:id', getTodoById);

router.post('/', createTodo);

router.put('/:id', editTodoById);

router.delete('/:id', deleteTodoById);

export default router;
