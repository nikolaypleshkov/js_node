const { Client, Pool } = require('pg');
const pool = new Pool();
const path = process.env.USER;
const Person = require('../entity/person');
const person = new Person('Mario', 'Pleshkov', 13, 'mariopleshkov21@abv.bg');

const client = new Client({
    user: 'pleshkov',
    host: 'localhost',
    database: 'nodejs',
    password: 645312,
    port: 5432,
});

client.connect();

async function registerPerson(person){
    try{
        const qry = `
        INSERT INTO person(fname, lname, age, email, pass)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id
     `;
 
     const values = [person._fname, person._lname, person._age, person._email, person._pass];
 
     return pool.query(qry, values);
    }
    catch(e){
        console.log(`Error: ${e} at function registerPerson(args)`);
    }

}

registerPerson({
    _fname: 'Nikolay',
    _lname: 'Pleshkov',
    _age: 19,
    _email: 'icelol@abv.bg',
    _pass: '5234123',
});

client.query(`SELECT * FROM person`, (err, res) => {
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end();
});



async function getPerson(personID){
    try{
        const qry = `SELECT * FROM person WHERE id = $1`;
        const values = [personID];
        return pool.query(qry, values);
    }
    catch(e){
        console.log(`Error: ${e} at function getPerson(args)`);
    }
}

// (async () => {
//     try{
//         const result = await registerPerson({
//             _fname: 'Nikolay',
//             _lname: 'Pleshkov',
//             _age: 19,
//             _email: 'icelol@abv.bg',
//             _pass: '5234123',
//         });
//         const personID = result.rows[0]["id"];
    
//         const getPersonResult = await getPerson(personID);
//         console.log(
//             `result from SELECT query for person: ${personID}: ${JSON.stringify(result.rows[0], null, " ")}`
//         );
//         client.end()

//     }
//     catch(e){
//         console.log(`Error: ${e} at async function(){...}`);
//     }
// })();


