// ...1 Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
function flated(arr){
    let flatedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            flatedArr = flatedArr.concat(flated(arr[i]));
        } else {
          flatedArr.push(arr[i]);
      }
     } return flatedArr;
}


// ...2 Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of
// digits of that number. Repeat that process if needed and return the result.
function sum(num){
    let lastDigit = num % 10;
    let suma = 0;
    while(num!==0){
        suma +=  lastDigit;
        num = (num-lastDigit)/10;
       
    }
    if(suma > 10){
        sum(suma);
    }
    return suma;
}



// ...3 Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to
// add element to the beginning use arr.unshift())
function rotates (arr, n){
    if(n === 0){
        return arr;
    }
    arr.unshift(arr.pop());
   return rotates(arr, n-1);
}



// ...4 Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value
// create an array.
* ԹԵՐԻ
function invertObj(obj){
    let invertedObj = {};
    for(let key in obj){
        invertedObj[obj[key]] = key;
    } 
    return invertedObj;
}



// ...5 Given the list of the following readers: Output the books sorted by the percent in descending order which readStatus is true.
* ԹԵՐԻ
function sorted(arr){
    let sortedArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i].readStatus){
            sortedArr.push(arr[i])
        } 
}return sortedArr;
}