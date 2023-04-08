// class Person{
//     firstName;
//     lastName;

//     getFullName(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }

// const person = new Person();
// person.firstName = 'Mark';
// person.lastName = 'Watson';

// person.getFullName();

let Person = class{
    firstName;
    lastName;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

let person = new Person();
person.firstName = 'Paul';
person.lastName = 'Watson';
person.getFullName();