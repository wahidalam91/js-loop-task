

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// Subtask-1/Solution: Display sum of all the odd numbers from 91 to 129.

let result = 0;
for(let m = 91; m <= 129; m++){
    if(m % 2 !== 0){
        result = result + m;
        console.log(m);
    }
}

console.log(result);


// Subtask-2/Solution: Display sum of all the even numbers from 51 to 85.
let sum = 0;
for(let n = 51; n <= 85; n++){
    if(n % 2 === 0){
        sum = sum + n;
        console.log(n);
    }
}

console.log(sum);