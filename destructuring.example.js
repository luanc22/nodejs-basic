const person = {
    name: 'Luan',
    age: 21,

    greet() {
        console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);