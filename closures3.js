function partial(add, a){
    return function (b) {
        return add(a, b);
    }
}

function add(a, b) {
    return a + b;
}

const addFive = partial(add, 5);

console.log(addFive(10));
console.log(addFive(15));