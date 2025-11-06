import cors from 'cors';
import express from 'express';
import todos from './routes/todos.js';
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello, server world!' });
});

// Routes
app.use('/api/todos', todos);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
