// ...1 Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers
// by the given num length over the specified interval (from a to b).
function f(a, b, num){
    if(num === 1){
        return [1];
    }
    let d = (b-a) / (num-1);
    let arr = [a];
    for(let i = 0; i<num-2; i++){
        arr.push((arr[i] + d));
    }
    arr.push(b);
    return arr;
}



// ...2 Given an array of numbers. Find the index of the second maximum element.
function maxArray(n){
    let maxNum = n[0];
    let maxNum_2;
    for(let i = 1; i < n.length; i++){
        if(maxNum < n[i]){
            maxNum_2 = maxNum;
            maxNum = n[i];
        }else if(maxNum_2 < n[i]&& n[i]!==maxNum){
            maxNum_2 = n[i];
        }
    }
    return n.indexOf(maxNum_2); 
 }



// //  ...3 Given an array of numbers, padding amount and repeat count. Pad the array in the
// following way: the padding amount specifies how many elements should be taken from
// the array edges, the repeat amount specifies how many times the pad should be
// repeated. Also, you should check that padding amount <= length of array.

function pad(arr, padAmount, repeat){
    if(padAmount > arr.length){
        return 'Invalid padding amount';
    } 
    let count = 1;
    let paddingArray = [];
    let paddingNewArray = [];
    while(count <= repeat){
        paddingArray.unshift(arr.slice(0, padAmount));
        count++;
    }  paddingArray.push(arr)
    count = 1;
    while(count <= repeat){
        paddingArray.push(arr.slice(arr.length - padAmount, arr.length))
        count++;
    }
    for(let j = 0; j< paddingArray.length; j++){
        let k = 0;
        while(k < paddingArray[j].length){
            paddingNewArray.push(paddingArray[j][k])
            k++
        }
    }
    return paddingNewArray;
}



// ...4 Write a function which receives an array and a number as arguments and returns a new array
// from the elements of the given array which are larger than the given number.

function compare(arr, num){
    let arrNew = [];
    for(let i = 0; i<= arr.length; i++){
        if(arr[i] > num){
            arrNew.push(arr[i])
        }
    }
        if(arrNew.length === 0){
            return 'Such values do not exist.';
        }
 return arrNew;
}



// ...5 Write a function, which receives two numbers as arguments and finds all numbers between
// them such that each digit of the number is even. The numbers obtained should be printed in a
// comma-separated sequence on a single line.
function even(num1, num2){
    let arr = [];
    for(let i = num1+1; i <= num2; i++){
        if(i % 2 === 0){
            arr.push(i)
        }
    }
    let x = arr.toString();
    return x;
}