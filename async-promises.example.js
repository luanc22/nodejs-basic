//example of async with timeout
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer complete.');
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

//example with backquote string
const name = "Jean";
let age = 45;

console.log(`His name is ${name}, he's ${age} years old and he's my father.`);



