const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sqlInsert = `INSERT INTO people(name) values('` + faker.person.firstName() + `')`;
const sqlSelect = `SELECT * FROM people`;
let sqlResult;

connection.query(sqlInsert);
connection.query(sqlSelect, (err, result) => {
    if (err) throw err;
    sqlResult = result;
});
connection.end();


app.get('/', (req, res) => {
    let html = '<h1>Full Cycle Rocks!</h1><br><h2>Lista de nomes cadastrados no banco de dados</h2>';
    sqlResult.forEach(sqlResult => {
        html = html + '<br><h3>' + sqlResult.name + '</h3>';
    });
    res.send(html);
})

app.listen(port, () => {
    console.log('Porta ' + port);
})