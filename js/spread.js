const max = Math.max(12, 3442, 43, 456);
// console.log(max);
const numbers = [12, 2003, 43, 434];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = numbers;
numbers.push(69);
numbers2.push(77);
console.log(numbers)
console.log(numbers2)

const number3 = [...numbers];

const number4 = [78, 234, ...numbers, 343, 7657];

console.log(number4)