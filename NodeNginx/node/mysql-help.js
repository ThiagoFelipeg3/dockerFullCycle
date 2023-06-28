const mysql = require('mysql')

module.exports = function (config) {
    this.conection;

    this.createConnection = () => {
        if (!this.conection) {
            this.conection = mysql.createConnection(config);
        }

        return this.conection;
    };

    this.insertPeople = () => {
        const names = [
            'Miguel',
            'Arthur',
            'Gael',
            'Théo',
            'Heitor',
            'Ravi',
            'Davi',
            'Bernardo',
            'Noah',
            'Gabriel',
        ];

        const query = `INSERT INTO people(name) VALUES('${names[Math.floor(Math.random() * names.length)]}')`;
        this.createConnection().query(query);
    };

    this.getPeople = (callback) => {
        this.createConnection().query('SELECT * FROM people', callback);
    };

    this.closeConnection = () => {
        this.conection.end();
    }
}