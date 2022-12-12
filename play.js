//variables for testing
const name = 'Luan'; //const for variables that doesnt change
let age = 21; //let for value changing variables
let job = 'Dev Jr';

/* example standard JS function
function buildUser(userName, userAge, userJob){
    return ('Username: ' + userName +
            '; Age: ' + userAge +
            '; Job: ' + userJob
        );
}
*/

//easier way to call a function (get used to this)
const buildUser = (userName, userAge, userJob) => {
    return ('Username: ' + userName +
            '; Age: ' + userAge +
            '; Job: ' + userJob
        );
};
console.log(buildUser(name, age, job));


//function with easy syntax can be written like this
const add = (a, b) => a + b;
console.log('Add: ' + add(1, 2));
//example with no params
const sub = () => 5 - 3;
console.log('Sub: ' + sub());

//function with one parameter can be written this way
const addOne = a => a + 1;
console.log('Add One: ' + addOne(5));




