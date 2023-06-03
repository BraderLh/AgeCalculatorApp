class User {

    static countObjectUsers = 0; //class attribute

    static get MAX_OBJ() {
        return 7;
    }
    //username = 'default username value'; //object attribute

    constructor(email, password) {
        this._email = email;
        this._password = password;
        if (User.countObjectUsers < User.MAX_OBJ) {
            this._idUser = ++User.countObjectUsers;
        }
        else {
            console.log('The limit of user creations was exceeded');
        }
    }

    get idUser() {
        return this._idUser;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    toString() {
        //multiforms in compilation-execution time
        //it depends by the references is parent or child type
        return `UserId: ${this._idUser}, 
                mail: ${this._email}, 
                Password: ${this._password}`;
    }

    static sayHello() {
        console.log('Hello from static method');
    }

    static sayHello2(user) {
        console.log(user._email);
    }
}

module.exports = User;
let user1 = new User('user1@gmail.com','123pass');
console.log(user1.toString());
let user2 = new User('user2@gmail.com','321pass');
console.log(user2.toString());
