import cors from 'cors';
import express from 'express';
import supabase from './db/supabaseClient.js';
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, server world!');
});

app.get('/todos', async (req, res) => {
  try {
    const { data, error, status } = await supabase.from('todos').select('*');
    if (error) {
      // Log server-side and return an appropriate status
      console.error('Supabase error:', error);

      return;
    }

    return res.json({ data });
  } catch (error) {
    console.error('Unexpected error:', error);

    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
