/* 
1. return keyword-- 
An explicit return occurs when a function explicitly 
uses the return keyword to return a value

2. if not explicit return func will give undefined.
*/

function add(a, b) {
  return a + b;
}

let res = add(add(1, 2), add(2, 2 * 2));
console.log(res);
