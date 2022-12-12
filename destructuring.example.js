const person = {
    name: 'Luan',
    age: 21,

    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

//destructuring example
const printName = ({ name }) => {
    console.log(name);
}
printName(person);

//array destructuring example
const hobbies = ['Playing Games', 'Cooking', 'Sports'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1 + ' , ' + hobby2);