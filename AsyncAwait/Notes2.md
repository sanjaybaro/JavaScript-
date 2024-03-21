# why synchrnous behaviour important

The async function allows the asynchronous method to be executed in a seemingly synchronous way. Though the operation is asynchronous, it seems that the operation is executed in synchronous manner.

This can be useful if there are multiple promises in the program. For example,

let promise1;
let promise2;
let promise3;

async function asyncFunc() {
    let result1 = await promise1;
    let result2 = await promise2;
    let result3 = await promise3;

    console.log(result1);
    console.log(result1);
    console.log(result1);
}
In the above program, await waits for each promise to be complete.

