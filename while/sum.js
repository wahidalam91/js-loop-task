

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// Subtask-1

let o = 80;
let sum = 0;
while( o < 131){
    o++;
    if(o % 2 !== 0){
        sum = sum + o;
    };
}

console.log(sum);



// Subtask-2

let e = 205;
let result = 0;
while(e < 311){
    e++;
    if(e % 2 === 0){
        result = result + e;
    }
    
}

console.log(result);

