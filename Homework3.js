// ...1 Write a recursive function to determine whether all digits of the number are odd or not.
function rec(num){
    const lastDigit = num % 10;
    if(num === 0){
        return 'true';
    }
    else if(lastDigit % 2 !== 0){
        return rec((num-lastDigit)/10);
    }
    return 'false';
}



// ...2 Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․
Չի ստացվել;




// ...3 Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.
function sortViolete(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            return i+1;
        }    
    }  return -1
}



// ...4 Write recursive, memorized function to get n-th Fibonacci number.
function fibRec(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return fibRec(num-1) + fibRec(num -2);
  }



//...5 Given an array. Write a recursive function that removes the first element and returns
// the given array. (without using arr.unshift(),assign second element to first, third element to
// second...)
  
Չի ստացվել;