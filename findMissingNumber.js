//import { now } from './performance.mjs';
//import { now } from './node_modules/performance/bin/performance.js'


let find_missing = function(input) {
    
    //  calculate sum of all integers in input list
    let actual_sum = 0;
    for (let i in input) {
        actual_sum += input[i];
    }

    let n = input.length + 1;   //  There is exactly 1 number missing

    // should be
    let sum_of_n = Math.floor((n * (n + 1)) / 2);
    //console.log("sum_of_n = " + sum_of_n);

    return sum_of_n - actual_sum;
};

console.log("");
console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("Find Missing Number");
console.log("---------------------------------------");

let random_array = [20, 14, 2, 17, 4, 12, 7, 5, 16, 9, 13, 8, 11, 18, 3, 6, 10, 1, 15];   // 19 missing
//let random_array = [1,2,3,4,5,6,10,12,7,8,9];  // 11 missing
//let random_array = [2]; // 1 missing


//var t0 = performance.now()  // to measure time of execution
let actual_missing = find_missing(random_array);
//var t1 = performance.now()
//console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

console.log("actual missing is " + actual_missing);

