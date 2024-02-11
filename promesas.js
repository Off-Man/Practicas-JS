// Callbacks VS Promises
// https://medium.com/@anny.huynh32/callbacks-vs-promises-vs-async-await-a66668d44c7b

function cuadradoPromise(value) {
    if (typeof value !== "number")
    return Promise.reject("error, el valor ingresado no es un número");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    })
    }

    cuadradoPromise(0)
    .then(obj => {
        console.log("Inicio promesa")
        console.log(`Promesa: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj => {
        console.log(`Promesa: ${obj.value}, ${obj.result}`);
        console.log("Fin Promesa");
    })
    .catch(err => console.error(err));