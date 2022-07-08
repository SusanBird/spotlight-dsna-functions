const myArray = [1, 6, 5];

//map 

function map(arr, callback) {
    const newArray = [];
    for (let i = 0; i <arr.length; i++) {
        const item  = arr[i];
        newItem = callback(item);
        newArray.push(newItem);
    }
    console.log(newArray);
    return newArray;
}

map(myArray, (x) => x * 2);
map(myArray, (x) => x ** 2);

//filter

function filter(arr, predicate) {
    for (let i = 0; i <arr.length; i++) {
        const item = arr[i];
        newItem = predicate(item);
        if (newItem) {
            newArray.push(item);
        }
    }
    console.log(newArray);
    return newArray; 
}

filter([2, 6, 5], (x) => x % 2 === 0);
filter([6, 17, 34], (x) => x % 17 === 0);

//every

function every(arr, predicate) {
    for (let i = 0; i <arr.length; i++) {
    const item = arr[i];
    newItem = predicate(item);
    if (newItem) {
        return true;
    } else { 
        return 'false';
    }
  }
}

const variable = every(myArray, (x) => x % 2 === 0);
const variable2 = every([4, 8, 12, 14], (x) => x % 2 === 0);
console.log(variable2);
console.log(variable);

//some

function some(arr, predicate) {
    for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        newItem = predicate(item);
        if (newItem) {
            return true;
        } else { 
            return 'false';
        }
    }
}

const someTest = some([1, 6, 5], (n) => n % 2 === 0);
const someTest2 = some([1, 7, 3], (n) => n % 2 === 0);
console.log("someTest", someTest);
console.log("someTest2", someTest2);

//add punctuation

function addPunctuation('???') {
    const string = ('some string');
    return callback(string + '???');
}

const yelling = addPunctuation('!!');
console.log(yelling('Llama'));