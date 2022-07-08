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

function filter(arr, callback) {
    for (let i = 0; i <arr.length; i++) {
        const item = arr[i];
        newItem = callback(item);
        if (newItem) {
            newArray.push(item);
        }
    }
    console.log(newArray);
    return newArray; 
}

filter([2, 6, 5], (x) => x % 2 === 0);
filter([6, 17, 34], (x) => x % 17 === 0);

