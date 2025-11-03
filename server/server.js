import cors from 'cors';
import express from 'express';
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, server world!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
