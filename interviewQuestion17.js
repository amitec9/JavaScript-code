function promiseOfAValue(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, 200);
    });
}

promiseOfAValue("Craig").then((value) => {
    console.log(`First Block: ${value}`);

promiseOfAValue("Matthews");
}).then((value) => {
    console.log(`Second Block: ${value}`);
}) 
//first block craig
//second block undefined
