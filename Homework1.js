// ...1
function freq(arr){
    arr.sort();
    let count = 1;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === arr[i+1]){
                count++;
            } else {
                const result = '' + arr[i] + ': ' + count / arr.length;
                console.log(result);
                count = 1;
            }
      }
    }



    // ...2
    function numStr(arr){
        let result;
        let countOfNum = 0;
        let countOfStr = 0;
        for(let i = 0; i<arr.length; i++){
            if(typeof(arr[i]) === 'number'){
                countOfNum++;
            } else{
                countOfStr++;
            }
            result = 'Numbers: ' + countOfNum + ', Strings: ' + countOfStr;
        } return result;
    }



    // ...4
    function longestWord(str){
        let arr = str.split(' ');
        let lengthOfArrSplit = arr[0];
        for(let i = 1; i< arr.length; i++){
            if(lengthOfArrSplit.length > arr[i].length){
            } else { 
                lengthOfArrSplit = arr[i];
            }
        }
        return lengthOfArrSplit;
    }



    // ...5
    Չեմ հասկացել պահանջը, օրինակն էլ պարզ չէր։



    // ...6
    function changeCharsPositions(str){
        let result = '';
        for(let i = 0; i < str.length; i += 3){
             let substr = str.substr(i, 3);
             if(substr.length === 3){
                 result += substr[2] + substr[1] + substr[0];
             } else {
                 result += substr;
             }
        }
        return result;
     }



    //  ...7
        const findNegSum = (arr) =>{
            let negNumbers = [];
            if(Array.isArray(arr)){
                for(let i=0;i<arr.length; i++){
                    if(Array.isArray(arr[i])){
                       negNumbers.push(findMin(arr[i]));
                    }else{
                        negNumbers=[];
                        break;
                    }
                }
            }
            const result = negNumbers.filter(el=>el!==0).reduce((acc, cur)=>{return cur*acc},1);
            if(negNumbers.length===0){
                return "invalid arguments"
            }else if(result===0){
                return "no negative number"
            }
            return result;
        }
        const findMin = (arr)=>{
            const negArr = arr.filter(el=>el<0);
            if(negArr[0]){
                return negArr.sort((a,b)=>b-a)[0]
            };
            return 0
        }



    // ...8
    let subsets = [];
let arg = (arr)=>{
    for(let i=0; i<arr.length; i++){
        toggleElement(arr[i])
    }
    return subsets
}
const toggleElement = (el)=>{
    let newSub = [];
    subsets.forEach(subEl=>{
        newSub = [...newSub, subEl, [...subEl, el]];
    })
    newSub.push([el]);
    subsets=newSub;

}