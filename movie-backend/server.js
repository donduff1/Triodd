
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('movies.db');

// Endpoint to get all movies
app.get('/movies', (req, res) => {
    db.all('SELECT * FROM movies', (err, rows) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.json(rows);
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
