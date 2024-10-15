/*
    Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. 
    An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
Tip:
    Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
*/

//function
function mergeSort (array){
    let merged = [];
    //return if nothing to merge
    if( array.length === 0) {return;}
    //return if only one element
    if (array.length === 1) {
        //take no action
        return array[0];
    }else{
        if(array.length > 2) {
            //if more than two elements split and merge sub arrays
            //split the array
            array = split(array)
            //merge the sub array
            array = mergeSort(array);
            return array;
        }
    }
    //here so array.length = 2
    //if simple elements -> simple comparison;
    if((! Array.isArray(array[0])) && (! Array.isArray(array[1]))){
        //do simple comparison
        if(array[0] < array[1]){
            //save it
            merged.push(array[0]);
            merged.push(array[1]);
        }else{   
            //array[1] < array[0]
            merged.push(array[1]);
            merged.push(array[0]);
        }
        return merged;
    }

    //here so array now two plain arrays so merge
    //merge each sub array first
    array.forEach((element,index)=>{
        if (element.length > 1) {
            array[index]=mergeSort(element);
            array[index] = array[index].flat(Infinity);
        }    
    });
    //while still more to merge
    while((array[0].length > 0) && (array[1].length > 0)){
        if(array[0][0] < array[1][0]){
            //save it
            merged.push(array[0][0]);
            array[0].splice(0,1);
        }else{   
            //array[1][0] < array[0][0]
            merged.push(array[1][0]);
            array[1].splice(0,1);
        }
    }
    //if more left then merge and add
    if(array[0].length > 0){
        if(array[0].length > 1){
            merged.push(mergeSort(array[0]));
        }else{
            merged.push(array[0][0]);
        }
    }
    if(array[1].length > 0){
        if(array[1].length > 1){
            merged.push(mergeSort(array[1]));
        }else{
            merged.push(array[1][0]);
        }
    }
    return merged.flat();
}


function split(arr){    
    //split array into individual elements -> splitArray = [ [arrL], [arrR] ]
    let splitArray = [];
    //step 1	if only 1 number quit
    let len = arr.length;
    let start_R= Math.floor(len/2);
    if( len === 1) { 
        if(count < start_R){
            result_L.push(arr);
        } else{
            result_R.push(arr);
        }
        splitArray.push(arr[0]);
       return splitArray;   
    }
    else{
        //step 2 split the array
        //split 2 new arrays  arrayL1 A[0] ->  A[abs((len)/2)-1] =-> A[2-1] =-> A[1] so L1 =-> A[0] -> A[1]
        let startR = Math.floor(len/2);
        let numR = len - startR;
        let numL = len - numR;
        let endL = startR-1;
        let arrL = arr.toSpliced(startR, numR);
        let arrR = arr.toSpliced(0, numL);
    
        splitArray.push(arrL);
        splitArray.push(arrR);
 
        return splitArray;
    }
}

console.log('-------------------------------------------------');
console.log('test 1');
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log('-------------------------------------------------');
console.log('should return [0, 1, 1, 2, 3, 5, 8, 13]');
console.log('-------------------------------------------------');
console.log('test 2');
console.log(mergeSort([105, 79, 100, 110]));
console.log('-------------------------------------------------');
console.log('should return [79, 100, 105, 110]');
console.log('-------------------------------------------------');
