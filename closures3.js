function partial(add, a){
    return function (b, c) {
        return add(a, b, c);
    }
}

function add(a, b, c) {
    return a + b + c;
}

const addFive = partial(add, 5);

console.log(addFive(10, 10));
console.log(addFive(15, 15));