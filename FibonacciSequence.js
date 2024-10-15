/*
Fibonacci
(reference: https://en.wikipedia.org/wiki/Fibonacci_sequence);

The Fibonacci Sequence, is a numerical sequence where each number is the sum of the two numbers before it. 
Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence.

This can be solved iteratively rather than recursively, nevertheless generating the sequence recursively is an excellent way to better understand recursion.

(see: https://www.youtube.com/watch?v=zg-ddPbzcKM)
*/

/*
    https://www.theodinproject.com/lessons/javascript-recursion

    Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, 
    this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
    Now write another function fibsRec which solves the same problem recursively.
    Test both versions of your functions by passing in various lengths as arguments.

*/

/*
examples:
if n = 0 return [0]
if n = 1 return [0,1]
if n = 2 return [0, 1, 1]
if n = 3 retrun [0, 1, 1, (1+ 1)]
if n = 4 return [0, 1, 1, (2), (1+ 2)]
if n = 5 return [0, 1, 1, 2, (3), (2 + 3) ]

                n=1    n=2       n=3       n=4                           n=5               n=6
if n = 6 return [0,     1,        1,        2,                            3,                5,            ]
                [0,     1,       0+1,       1+1                          1+2                2+3             

if f = 6 ret arr[a,     b,        c,        d,                            e,                f,            ]
             arr[arr[0] arr[1]    arr[2]    arr[3]                        arr[4]            arr[5]        ]
where:
if n = 6  return[a=0    b= 1      c= (a)   +  (b)          .....................   f     = (d)   +  (e) ) ]
if n = 6         base   base      arr[2]= arr[0]+ arr[1]   .....................   arr[5]= arr[4]+ arr[3] ]
                                    n-1      n-2     n-3   .....................      n-1      n-2     n-3

pseudo code:
base case if n = 1 return 0     arr[0]
or 
base case if 1 < n < 4 return 1 arr[1]  arr[2]

else if n > 3 return fibs ( n ) arr[n-1] = arr[n-2] + arr[n-3] 
eg      n= 4                    arr[3]   = arr[2]   + arr[1]   
                                         =    1     +    1        = 2

eg      n= 6                    arr[5]   = arr[4]   + arr[3]   
                                         =    3     +    2       =  5
*/

//code

//iterative solution
function fibs (n) {
    console.log ('Printed iteratively');
    //to return fnArray[ first n numbers from the fibonacci sequence, first is 0 ]
    let fibArray=[];
    if(n===0){return [];}
    console.log('Fibronacci sequence (iterative) (recursive) for n: ', n);
    for (i = 0; i < n ; i++){
        if( i === 0){
            fibArray.push(0); 
            //console.log(i+1,' fibArray[0]: ',fibArray[0]);
        }
        if( (i > 0) && (i < 3 )){
            fibArray.push(1); 
            //console.log(i+1,' fibArray[',i,']: ',fibArray[i]);
        }
        if(i > 2){
            /*
            console.log('-----------------------------------');
            console.log(i+1,' fibArray[',i-1,']: ', fibArray[i-1]);
            console.log(i+1,' fibArray[',i-2,']: ', fibArray[i-2]);
            console.log(' ');
            */
            fibArray.push(( fibArray[i-1]) + (fibArray[i-2]) );
            /*
            console.log(i+1,' fibArray[[',i,']: ', fibArray[i]);
            console.log('-----------------------------------');
            */
        }
    }

    return fibArray; 
}
/*--------------------------end iteratively ------------------------------*/
//code
/*
let fibArray=[];
console.log(0, ' : ', fibs(0));
console.log('======================================');
fibArray=[];
console.log(1, ' : ', fibs(1));
console.log('======================================');
fibArray=[];
console.log(2, ' : ', fibs(2));
console.log('======================================');
fibArray = [];
console.log(3, ' : ', fibs(3));
*/
console.log('======================================');
console.log(8, ' : ', fibs(8));
console.log('======================================');

//-----------------------------------Recursive --------------------------------------

//mark 2
//recursive solution

let fArray =[];
let count = 0;
/*
console.log(fibsRec(4));
 fArray =[];
 count = 0;
console.log(fibsRec(5));
 fArray =[];
 count = 0;
 */
console.log(fibsRec(8));

function fibsRec(n){ //4
    console.log('Fibronacci sequence for n: ', n);
    if( n === 0){return fArray}  // 4
    else{
    console.log("This was printed recursively");
        if(count === 0) {fArray.push(0);}  // n=4 c=0: a= [0]
        if((count >0)&&(count < 3)){fArray.push(1);} //n=3 c=1: & n=2 c=2: [0,1,1]
        if(count > 2){fArray[count] = fArray[count-2] + fArray[count -1];} //n=4: c=3  [0,1,1,2]
        count++;                                                            //n=5: c=4 a = [0,1,1,2,3] 
        return fibsRec(n-1); // 3 2 1 
    }
}


/*----------------------------------- end of my recursive ------------------------------------------------*/
