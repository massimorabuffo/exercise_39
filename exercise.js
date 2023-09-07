const isLogged = true;

let promise = new Promise((resolve, reject) => {
    if(isLogged) {
        resolve(num = Math.random());
    } else reject('isLogged is false.');
})

let promise2 = new Promise((resolve, reject) => {
    if(num > 0.5) {
        resolve({name: "John", age: 24});
    } else reject('The number is less than 0.5.');
})

promise
    .then(() => promise2)
    .then((resolve) => console.log(resolve))
    .catch((error) => console.log(error))
    .finally(() => console.log('Finally!'));