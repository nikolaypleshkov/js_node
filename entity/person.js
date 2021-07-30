class Person{
    constructor(fname, lname, age, email,pass){
        this._fname = fname;
        this._lname = lname;
        this._age = age;
        this._email = email;
        this._pass = pass;
    }

    getFullName(){
        return this._fname + ' ' + this._lname;
    }

}

module.exports = Person;    