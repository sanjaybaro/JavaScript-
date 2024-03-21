1. Await working:
its basically convert async code into sync manner so that 
it behave likes sync code but actually its async
 wait is taken care here 

2. Doesnot block the main execution thread

3. async keyword:
async keyword will be use on front of function , which makes 
it a async function. which eventually return a promise

-By default the promise will already resolve inside async fnc.
-whatever return from async function it will give us the
result for the prmosise or that particular async fnc.

4. Error Handling in async function-
if we want to reject promise we can use the below keyword
it is done by throw new Error keyword

5. what await actually do-
a. it actually returns the result of promise.
b. it actually wait the prmoise response then after coming
the response it will return the result as a value.
c.mala singaosw dwngwmwn.

6. Iportant flow
The async function allows the asynchronous method to be executed in a seemingly synchronous way. Though the operation is asynchronous, it seems that the operation is executed in synchronous manner.with the help of await.

### Important NOTES:

1. why it is important to use await inside async function. why it is necessary to worked liked as synchronous manner though it is asynchronous in nature

Ans-
Using await inside an async function in JavaScript is important for several reasons:

1. Readable and Maintainable Code: 
Asynchronous code can become difficult to understand when nested callbacks or promises are used extensively. The async/await syntax allows developers to write asynchronous code that resembles synchronous code, making it more readable and easier to maintain.

2. Error Handling: 
await simplifies error handling in asynchronous code. When using await, you can use traditional try/catch blocks to handle errors, just like with synchronous code. This makes it easier to manage errors and prevents the need for deeply nested error handling.

3. Avoiding Callback Hell:
 Callback hell is a common problem in asynchronous JavaScript programming, where multiple nested callbacks can lead to code that is hard to understand and maintain. await helps to mitigate this issue by allowing developers to write asynchronous code in a more linear and structured manner.

4. Sequential Execution: 
Using await ensures that code execution waits for each asynchronous operation to complete before moving on to the next line of code within the async function. This sequential execution behavior is often necessary for certain tasks that depend on the results of previous asynchronous operations.

6. Concurrency Control: 
await provides a way to control the concurrency of asynchronous operations. By awaiting asynchronous calls within a loop or iteration, you can ensure that operations are executed sequentially or in a controlled manner, rather than all at once.

Although JavaScript is inherently asynchronous, using await inside an async function allows developers to leverage its asynchronous capabilities while maintaining a synchronous-like flow, making it easier to reason about and manage asynchronous code.