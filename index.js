const array = [1, 42, 'hi'];
let test = [30, 29]

function remove(FindArray, item) {
    return FindArray.filter(element => element !== item);
}

console.log(remove(array, 1))
console.log(remove(test, 30))
