function createCounter(){
    let i= 1;
    return function(){
        return i++;
    }
}
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());