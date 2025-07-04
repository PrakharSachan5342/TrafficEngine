const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'prakhar@5342',
  database: 'traffic_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

app.get('/', (req, res) => {
  res.send('Backend working!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
