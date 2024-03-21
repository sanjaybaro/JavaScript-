fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json(); //return the promise if not nested
  })
  .then((data) => {
    console.log(data);
  });

/*
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => console.log(json))
*/
