let person = {
    name: 'Nag',
    age: 31,
    height: 183,
}

// Dot notation
person.name = 'Nagabhushana';
person['age'] = 31.0;

let propToPrint = 'height';

console.log(person['name']);
console.log(person.age);
console.log(person[propToPrint]);