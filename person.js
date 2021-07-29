class Person{
    constructor(fname, lname, age, email, password){

        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.password = password;
        this.data = {
            name: fname + ' ' + lname,
            age: age,
            email: email,
            password: password
         }
         this.loginData = {
            email: email,
            password: password
         }    

    }

    getAll(){
        return data; 
    }

    getName(){
        return fname + ' ' + lname;
    }

    getLoginData(){
        return loginData;
    }
    
    getPass(){
        return this.password;
    }

    getEmail(){
        return this.email;
    }
}

module.exports = Person;