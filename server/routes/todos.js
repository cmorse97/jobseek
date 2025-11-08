import express from 'express';
import supabase from '../db/supabaseClient.js';

const router = express.Router();

// Get all todos
router.get('/', async (req, res) => {
  try {
    // fetch and sort todos from supabase
    const { data: todos, error } = await supabase
      .from('todos')
      .select('*')
      .order('is_completed', { ascending: true })
      .order('id', { ascending: false });

    if (error) {
      return res.status(400).json({ error: error.message });
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
    // fetch single todo from supabase based on id
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
    // insert new todo to supabase
    const { error: insertError } = await supabase.from('todos').insert(newTodo);

    if (insertError) {
      return res.status(400).json({ error: insertError.message });
    }

    return res.status(201).json(newTodo);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error ' });
  }
});

// Update a todo by id
router.put('/:id', async (req, res) => {
  const { title, is_completed } = req.body;
  const todoId = req.params.id;

  try {
    const { data: todo, error: updateError } = await supabase
      .from('todos')
      .update({
        ...(title && { title }), // optional update
        ...(typeof is_completed === 'boolean' && { is_completed }), // ensure boolean
      })
      .eq('id', todoId)
      .select();

    if (updateError) {
      return res.status(400).json({ error: updateError.message });
    }

    return res.status(200).json(todo);
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

    return res.status(200).json(todo);
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
