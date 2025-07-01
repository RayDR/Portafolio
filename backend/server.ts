
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('Portfolio backend is running!');
});

app.get('/api/projects', (_, res) => {
  res.json([
    { title: 'Online Course Platform', description: 'A React + Node.js platform for self-paced learning.' },
    { title: 'Survey Web App', description: 'Create and analyze surveys visually with Django + React.' },
    { title: 'Inventory Manager', description: 'Admin web system for inventory and product tracking.' },
    { title: 'Generic Dashboard', description: 'Flexible React dashboard to plug into any backend.' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
