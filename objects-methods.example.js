//object with variables and function declaration
const person = {
    name: 'Luan',
    age: 21,

    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

person.greet();

//array with map to insert method on array
const hobbies = ['Playing Games', 'Cooking', 'Sports'];
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}))

//adds a new index in the array
hobbies.push('Programming');
console.log(hobbies);

//slice the array
let copycatArray = hobbies.slice(1);
console.log(copycatArray);

//example of removing brackets and stuff from nested arrays
copycatArray = [...hobbies];
console.log(copycatArray);

//passing toArray
const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4));


