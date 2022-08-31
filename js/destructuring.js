const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'Silver',
    phone: '0181328373',
    price: 3000
}


const {
    phone
} = fish;
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const {
    age,
    name
} = {
    name: 'Abul Kalak',
    age: 37,
    profession: 'Farmer'
}
console.log(age);

const {
    address
} = fish;
console.log(address);

// array destructuring 
const [first, another] = [23, 35, 654, 5634];
console.log(first, another);

const nayoks = ['sakil', 'bakil', 'rajjo', 'kajur'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getName() {
    return ['Abid', 'Kabid'];
}

const [ba, cha] = getName();
console.log(cha, ba);

const div = n1,
    n2 => console.log(4 / 2);