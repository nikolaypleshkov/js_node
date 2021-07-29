const express = require('express');
const app = express();



const Person = require('./person'); //class Person from external file...

const person = new Person('Nikolay', 'Pleshkov', 20, 'icelol@abv.bg', 999666)
const fname = 'Nikolay';
const lname = 'Pleshkov';
const age = 20;

//fron local file
class Person2{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getFullName(){
        return this.fname + ' ' + this.lname;
    }

    getFirstName(){
        return this.fname;
    }

    getLastName(){
        return this.lname;
    }

    getAge(){
        return this.age;
    }
}

let codedPass = [];

function codePassword(pass){
    let size = pass.length;
    let cM_pass = [];

    for(let i = 0; i < size; i++){
        cM_pass.push('*');
    }

    return cM_pass.toString();
}


const fullName = fname+' '+lname; 

const p = {name: fullName, age: age}

let DecodePass = {};
DecodePass.decode = function(){
    console.log('decoding password ' + codePassword(person.password));
    setTimeout(() => {
        console.log('decoding...');
    },2000);
    setTimeout(() => {
        console.log('finish');
    },2300)
    setTimeout(() => {
        console.log('decoded: ' + person.password);
    }, 2500);
}

let GetPersonData = {};
GetPersonData.getData = function(){

    setTimeout(() => {
        return 'getting data from server...';
    },2000);

    setTimeout(() => {
        return 'finish';
    },2300);

    setTimeout(() => {
        return person.data;
    },2700);
}

let $ = DecodePass;
let $all = GetPersonData;
// $.decode();

// setTimeout(() => {
//     $all.getData();
// },4000);

// $.decode();


//global variable
// const phoneNumber = 35987213124;

// console.log(phoneNumber);


// function callPhone(){
//     //local variable
//     const phoneNumber = 88888888;
//     console.log(phoneNumber);
// }

// var x = (function(){
//     console.log('calling...');
// }());

// let z = (a, b) => {
//     return a + b;
// }

// console.log(z(2 , 8));

// callPhone();



// x = 5;

// xz = 1;


// console.log(xz);


// console.log(x);


const getData = $all.getData();

app.get('/' , (req, res) => {
    res.send($all.getData());
});

app.listen(5000);
