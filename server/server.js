import cors from 'cors';
import express from 'express';
import errorMiddleware from './middleware/errorMiddleware.js';
import todoRouter from './routes/todoRouter.js';
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.json({ message: 'Hello, server world!' });
});

// Todo Routes
app.use('/api/todos', todoRouter);

// {*splat} is a catch all (use for error handling)
app.get('/{*splat}', (req, res) => {
  res.json({ message: 'Page not found.' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
