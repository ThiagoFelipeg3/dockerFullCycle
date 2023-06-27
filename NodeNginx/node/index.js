const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3001
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    const query = `INSERT INTO people(name) values('Thiago')`;
    connection.query(query);

    let htmlList = '';

    connection.query('SELECT * FROM people', (error, results, fields) => {
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

    connection.end();
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
