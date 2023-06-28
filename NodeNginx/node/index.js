const express = require('express')
const MysqlHelp = require('./mysql-help.js');

const app = express()
const port = 3001
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = new MysqlHelp(config);

app.get('/', (req, res) => {
    let htmlList = '';

    mysql.insertPeople();
    mysql.getPeople((error, results) => {
        if (error) throw error;

        results.forEach(people => {
            htmlList += `<li>${people.name}</li>`
        });

        res.send(`
            <h1>Full Cycle AQUI!!!</h1>
            <ol>
                ${htmlList}
            </ol>
        `);
    });
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

