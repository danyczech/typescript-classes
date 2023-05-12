/*interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'John',
    age: 34,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
}

user1.greet('Hello');
*/

interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age= 30;

    constructor (n:string) {
        this.name=n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Dana');
user1.greet('Hi there - I am');

//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};