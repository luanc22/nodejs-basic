const name = 'Luan';
let age = 21;
let job = 'Dev Jr';

function buildUser(userName, userAge, userJob){
    return ('Username: ' + userName +
            '; Age: ' + userAge +
            '; Job: ' + userJob
        );
}

console.log(buildUser(name, age, job));


