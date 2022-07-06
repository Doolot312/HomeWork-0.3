class Animal {
    constructor(name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.age = age
    }
}

class Dog extends Animal {
    constructor(name, lastName, age, Gav){
        super(name, lastName, age,)
        this.Gav = Gav
    }
    sayGav(){
        console.log(`${this.Gav}`);
    }
}
console.log('', '','', 'Гав');


class Cat extends Animal {
    constructor(name, lastName, age, meow){
        super(name, lastName, age,)
        this.meow = meow
    }
    sayMeow(){
        console.log(`${this.meow}`);
    }
}
console.log('', '','', 'Мяу');

class Tiger extends Animal {
    constructor(name, lastName, age, weight){
        super(name, lastName, age,)
        this.weight = weight
    }
    sayWeight(){
        console.log(`${this.weight}`);
    }
}
console.log('', '', '', '300кг');

class Wolf extends Animal {
    constructor(name, lastName, age, howl){
        super(name, lastName, age)
        this.howl = howl
    }
    sayHowl(){
        console.log(`${this.howl}`);
    }
} 
console.log('', '', '', 'аууу');