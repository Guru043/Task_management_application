// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); // Import the database connection

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Create a new task
app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;
    const sql = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
    connection.query(sql, [title, description, status], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: results.insertId, title, description, status });
    });
});

// Retrieve all tasks
app.get('/tasks', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
