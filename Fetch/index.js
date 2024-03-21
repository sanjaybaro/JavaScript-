/*
fetch("https://dummyjson.com/products")
  .then(
    (res) => res.json() //return the promise if not nested alogn with here return is explicit try to make emplicit
  )
  .then((data) => {
    console.log(data);
  });
*/
/*
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => console.log(json))
*/

/*
//MAKING POST REQUEST

const data = {
  title: "iPhone 14",
  description: "An apple mobile which is nothing like apple",
  price: 7890,
};
const url = "https://dummyjson.com/products/add";
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Success", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });


const url = 'https://example.com/api/post'; // URL where you want to send the POST request
const data = { key1: 'value1', key2: 'value2' }; // Data to be sent in the body of the request

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify content type as JSON
  },
  body: JSON.stringify(data), // Convert data to JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    console.log('Success:', data); // Handle the response data
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });

//MAKING DELETE REQUEST

const url = 'https://example.com/api/resource/123'; // URL of the resource to delete

fetch(url, {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Resource deleted successfully');
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });

  

// MAKING PATCH REQUEST

const url = 'https://example.com/api/resource/123'; // URL of the resource to update
const data = { key: 'updatedValue' }; // Data to be sent in the body of the request

fetch(url, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json', // Specify content type as JSON
  },
  body: JSON.stringify(data), // Convert data to JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log('Resource updated successfully');
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });

 //Making PATCH REquest with dummyJSOn
  
const data = {
    title: "iPhone 19",
    description: "An apple mobile which is nothing like apple",
    price: 7890,
    brand:"oppo"
  };
  const url = "https://dummyjson.com/products/1";
  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Success", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });

*/

/*
const data = {
  title: "iPhone 14",
  description: "An apple mobile which is nothing like apple",
  price: 7890,
};
const url = "https://dummyjson.com/products/30";
fetch(url, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Success", data);
  })
  .catch((err) => {
    console.log("Error", err);
  });
*/
