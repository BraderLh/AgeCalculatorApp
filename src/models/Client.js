const User = require('./User');

class Client extends User {

    static countClients = 0;

    constructor(email, password, registrationDate) {
        super(email, password);
        this.idClient = ++Client.countClients;
        this._registrationDate = registrationDate;
    }


    get registrationDate() {
        return this._registrationDate;
    }

    set registrationDate(registrationDate) {
        this._registrationDate = registrationDate;
    }

    toString() {
        return `${super.getInfo()}, Client id: ${this.idClient}, Registration-Date: ${this.idClient}`
    }
}

let clientOne = new Client('test6@gmail.com', '103password', '24-05-2023');
console.log(clientOne.toString());