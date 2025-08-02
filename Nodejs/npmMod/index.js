const chalk = require('chalk');
const validator = require('validator');
console.log(chalk.blue('Hello world!'));

const email = validator.isEmail('santosh@gmail.com');

console.log(email ? chalk.green.inverse(email):chalk.red.inverse(email));


/*
const Arithmetic1 = {
    value: 0,
    sum(...args) {
        this.value = args.reduce((acc, val) => acc + val, this.value);
        return this;
    },
    subtraction(val) {
        this.value -= val;
        return this;
    },
    add(val) {
        this.value += val;
        return this;
    }
};

console.log(Arithmetic1.sum(1, 3, 6).value); 

console.log(Arithmetic1.subtraction(3).value);

console.log(Arithmetic1.add(4).value); 
*/