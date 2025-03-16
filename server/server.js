const { Console } = require('console');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'sideUser',
    password: 'yTH7bGLlMyPMx!2h', 
    database: 'quotesdb'
});

db.connect(console.log('Connected to the MySQL database.'));

app.get('/api/quote', (req, res) => {
    const language = req.query.lang;

    let query = 'SELECT * FROM quotes WHERE language = ? ORDER BY RAND() LIMIT 1';

    db.query(query, [language], (err, results) => {
        res.json(results[0]);
    });
});

app.listen(8080);