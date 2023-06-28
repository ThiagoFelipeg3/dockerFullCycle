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
        const query = `INSERT INTO people(name) values('Thiago')`;
        this.createConnection().query(query);
    };

    this.getPeople = (callback) => {
        this.createConnection().query('SELECT * FROM people', callback);
    };

    this.closeConnection = () => {
        this.conection.end();
    }
}