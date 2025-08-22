/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Subtask-1/Solution

let o = 60;
while(o <= 100){
    o++;
    if(o % 2 !== 0){
        console.log(o);
    }

}


// Subtask-2/Solution
let e = 77;
while(e < 98){
    e++;
    if(e % 2 === 0){
        console.log(e);
    }
}