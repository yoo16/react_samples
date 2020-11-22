const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'memo_app'
});

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

const app = express();
const sql = 'SELECT * FROM notes ORDER BY updated_at DESC LIMIT 100';
app.get('/list', (req, res) => {
    connection.query(sql, (error, results) => {
            //console.log(results);
            //res.render('list.ejs');
            //if (error) throw error;
            console.log(results);
            res.send(results);
        }
    );
});

app.listen(3000);