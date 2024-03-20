1. Promise
 promises is nothing but JS object which gives result
 based on three condition -
-pending
-fullfilled
-reject
-it takes callback function in a constructor function
  callback fnc take two argument-
  a. resolve
  b. reject

2. promise method
promise have gives method calls .then() and .catch() and .finally()

- when promises reolved  
.then(()=>{}) method was
  called to gives result .
- when promises reject
.catch (()=>{}) method was
  called to catch the error
- in the .then() and .catch() we can pass data as an argument
in the callback which gives the data that has been passed in reject
  and reject argument .

3. PROMISE STATE-

1.pending--
2.fullfilled-- .then() method called
3.reject-- .catch() method called

4.finally()-- basically it will called when prmomise state is settled.
finally() method is called when the Promise is settled (either resolved or rejected).
It provides a way to run final code that should be executed regardless of whether the Promise was resolved or rejected.

### Micro task queue
-promise came under this queue and also
mutation observer
-PRIORITY --> MicroTaskQueue > CallBack Queue

5. .then itself returns a promise
-.then() returns promise so we can use multiple .then () like nested 
which takes previous data as argument in callback , if not return
anything in the childiest ,.then() it will give undefined



