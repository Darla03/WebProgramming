const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');



const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
require('dotenv').config();  // Add this to load environment variables



const personalPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'personal_info',
  password: '12345',
  port: 5432,
});

const hobbiesPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hobbies',
  password: '12345',
  port: 5432,
});


app.get('/api/personal', async (req, res) => {
  try {
    const result = await personalPool.query('SELECT * FROM personal_info');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching personal info:', err);
    res.status(500).send('Server ERrOR!');
  }
});


app.get('/api/hobbies', async (req, res) => {
  try {
    const result = await hobbiesPool.query('SELECT * FROM hobby_list');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching hobbies:', err);
    res.status(500).send('Server Error');
  }
});

//  server starting 
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
