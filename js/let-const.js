// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 57;
money = 98;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'shalik pakhi';
const message = bird + 'Kothai jaow'
console.log(bird);
console.log(message);

const numbers = [12, 23, 34, 56];
// reassign is not allowed
// numbers = [23, 454, 564, 5643, 56433];
numbers.push(2321);
numbers[0] = 100;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'rongpur'
}
// student = {name: 'mofazzol'}
student.name = 'mofazzel'

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum = sum + number;
}
console.log(sum)