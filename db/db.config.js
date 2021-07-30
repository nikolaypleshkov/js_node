const { Client } = require('pg');

const client = new Client({
    user: 'localhost',
    host: 'postgres',
    database: 'nodejs',
    password: '',
    port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    client.end();
})