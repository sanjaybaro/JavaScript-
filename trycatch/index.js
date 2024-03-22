// console.log(a)
// console.log(2+3)

//above code will not run further after loging a because its give error

try {
  console.log(a);
} catch (error) {
  console.log(error);
} finally {
  console.log("It will run always after try or catch ");
}
console.log(3 + 7);
console.log("hello");

//but with trycatch it will run the code even it will give error
// in some cases because we are handling the error here



/*
EXAMPLE
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    // You can choose to handle the error in various ways, like logging, showing an error message to the user, etc.
    // For now, we'll return null in case of an error.
    return null;
  }
}

// Usage
const url = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(url)
  .then(data => {
    if (data) {
      console.log('Fetched data:', data);
      // Do something with the fetched data
    } else {
      console.log('Failed to fetch data');
      // Handle the case where data fetching failed
    }
  })
  .catch(error => {
    console.error('Error in fetch operation:', error);
    // Handle any errors that occurred during the fetch operation
  });

*/