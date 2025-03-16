const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sideUser',
    password: 'yTH7bGLlMyPMx!2h', 
    database: 'quotesdb'
});

db.connect(console.log('Connected to the MySQL database.'));

app.get('/api/quote', (req, res) => {
    db.query('SELECT * FROM quotes', (err, results) => {
        res.json(results[0]);
    });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});