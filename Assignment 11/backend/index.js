// backend/index.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const personalDb = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'personal_info',
  password: 'your_db_password',
  port: 5432,
});

const hobbiesDb = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'hobbies',
  password: 'your_db_password',
  port: 5432,
});

app.get('/personal', async (req, res) => {
  const result = await personalDb.query('SELECT * FROM personal_info');
  res.json(result.rows);
});

app.get('/hobbies', async (req, res) => {
  const result = await hobbiesDb.query('SELECT * FROM hobbies_list');
  res.json(result.rows);
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
