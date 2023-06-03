//import User from './User.js' -> just for frameworks;
const User = require('./User');

class Account extends User{

    static countAccounts = 0;

    constructor(email, password, name, surname, birthdate, phone) {
        super(email, password);
        this._idAccount = ++Account.countAccounts;
        this._name = name;
        this._surname = surname;
        this._birthdate = birthdate;
        this._phone = phone;
    }

    get idAccount() {
        return this._idAccount;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get surname() {
        return this._phone;
    }

    set surname(surname) {
        this._surname = surname;
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        this._phone = phone;
    }

    //overwrited method
    toString() {
        //return this._name + ' ' + this._surname + ' ' + this._email + ' ' + this._password + ' ' + this._birthdate + ' ' + this._phone;
        return `${super.toString()},  
                Name: ${this._name},
                Surname: ${this._surname},
                Birth date: ${this._birthdate},
                Phone number: ${this._phone}`;
    }
}

// let userOne = new User('test1@gmail.com', '123password');
// console.log(userOne.toString());
//console.log(userOne.saludar()) // Not possible to call this method from object
//User.sayHello();
//User.sayHello2(userOne);
//console.log(userOne.countObjectUser); undefined
//console.log(User.countObjectUser);
// let userTwo = new User('test2@hotmail.com', '456password');
// console.log(userTwo.toString());
let accountOne = new Account('test1@gmail.com', '123password', 'Viankita', 'Romero', '1999-05-01', '951101248');
//console.log(accountOne.getInfo());
console.log(accountOne.toString());
// //console.log(Account.node AcccountObjectUser);
let accountTwo = new Account('test2@gmail.com', '456password', 'Vivianita', 'Arapa', '1997-08-28', '91235455');
console.log(accountTwo.toString());

let accountThree = new Account('test3@gmail.com', '789password', 'Jimenita', 'Valverde', '2000-04-10', '997651923');
console.log(accountThree.toString());
let accountFourth = new Account('test4@gmail.com', '101password', 'Karencita', 'Borda', '2000-09-22', '997651923');
console.log(accountFourth.toString());
let accountFifth = new Account('test5@gmail.com', '102ssword', 'Alexandrita', 'Pino', '2001-10-31', '997651923');
console.log(accountFifth.toString());
let accountSixth = new Account('test6@gmail.com', '103password', 'Jimenita', 'Valverde', '2000-04-10', '997651923');
console.log(accountSixth.toString());
//let accountSeventh = new Account('test7@gmail.com', '103password', 'Jimenita', 'Valverde', '2000-04-10', '997651923');
console.log(User.MAX_OBJ);