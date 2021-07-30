const { Client } = require('pg');

module.exports._db_connect = () => {

    const client = new Client({
        user: 'pleshkov',
        host: 'localhost',
        database: 'nodejs',
        password: '645312',
        port: 5432,
    });
    
    client.connect();
    
    // client.query('SELECT * FROM person', (err, res) => {
    //     console.log(err, res);
    //     client.end();
    // })
}



