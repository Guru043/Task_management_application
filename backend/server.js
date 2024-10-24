// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Create a new task
app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;
    const query = 'INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)';
    
    db.query(query, [title, description, status], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: results.insertId, title, description, status });
    });
});

// Get all tasks
app.get('/tasks', (req, res) => {
    const query = 'SELECT * FROM tasks';
    
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json(results);
    });
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const query = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';

    db.query(query, [title, description, status, id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(200).json({ id, title, description, status });
    });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tasks WHERE id = ?';

    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(204).send();
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
