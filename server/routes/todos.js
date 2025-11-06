import express from 'express';
import supabase from '../db/supabaseClient.js';

const router = express.Router();

const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};
router.use(timeLog);

// Get all todos
router.get('/', async (req, res) => {
  try {
    const { data: todos, error } = await supabase.from('todos').select('*');

    if (error) {
      return res.status(204).json({ error: error.message });
    }

    return res.status(200).json(todos);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single todo by id
router.get('/:id', async (req, res) => {
  const todoId = req.params.id;

  try {
    const { data: todo, error } = await supabase
      .from('todos')
      .select()
      .eq('id', todoId);

    if (error) {
      return res
        .status(404)
        .json({ error: `Todo with id: ${todoId} was not found.` });
    }

    return res.status(200).json(todo);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new todo
router.post('/', async (req, res) => {
  const newTodo = req.body;

  try {
    const { data: todo, error } = await supabase.from('todos').insert(newTodo);

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json(newTodo);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error ' });
  }
});

// Update a todo by id
router.put('/:id', async (req, res) => {
  const updatedTodo = req.body;
  const todoId = req.params.id;

  try {
    const { data: todo, error: putError } = await supabase
      .from('todos')
      .update({
        title: updatedTodo.title ? updatedTodo.title : todo[0].title,
      })
      .eq('id', todoId);

    if (putError) {
      return res.status(400).json({ error: putError.message });
    }

    const { data: todos, error } = await supabase.from('todos').select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(todos);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a todo by id
router.delete('/:id', async (req, res) => {
  const todoId = req.params.id;

  try {
    const { data: todo, error: delError } = await supabase
      .from('todos')
      .delete()
      .eq('id', todoId);

    if (delError) {
      return res.status(400).json({ error: delError.message });
    }

    const { data: todos, error } = await supabase.from('todos').select();

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(todos);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
