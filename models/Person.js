const { Pool } = require('pg');
const pool = new Pool();

const Person = require('../entity/person');
let person = new Person('Nikolay', 'Pleshkov', 19, 'icelol@abv.bg', '645312niki');

async function registerPerson(person){
    try{
        const qry = `
        INSERT INTO person(fname, lname, age, email, pass)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id
     `;
 
     const values = [person._fname, person._lname, person._age, person._email, person._password];
 
     return pool.query(qry, values);
    }
    catch(e){
        console.log(`Error: ${e} at function registerPerson(args)`);
    }

}

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




(async () => {
    try{
        const result = await registerPerson({
            _fname: 'Nikolay',
            _lname: 'Pleshkov',
            _age: 19,
            _email: 'icelol@abv.bg',
            _password: '5234123',
        });
        const personID = result.rows[0]["id"];
    
        const getPersonResult = await getPerson(personID);
        console.log(
            `result from SELECT query for person: ${personID}: ${JSON.stringify(result.rows[0], null, " ")}`
        );
    }
    catch(e){
        console.log(`Error: ${e} at async function(){...}`);
    }
})();

