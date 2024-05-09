document.addEventListener("DOMContentLoaded", function() {
    // When the DOM content is fully loaded, execute the following code
    
    fetch('products.json')
     // Fetch the products.json file

      .then(response => response.json()) 
      // Parse the response as JSON

      .then(data => {
         // When JSON parsing is successful, handle the data

        const gridContainer = document.getElementById('product-grid');  // Get the grid container element
        data.forEach(product => {       // Iterate through each product in the data
          const productItem = document.createElement('div');      // Create a div element for each product
          productItem.classList.add('product-item');    // Add a class to the product item
  
          const productImage = document.createElement('img');     // Create an img element for the product image
          productImage.src = product.image;  // Set the src attribute of the image
          productItem.appendChild(productImage);  // Appends the items
  
          const productTitle = document.createElement('h3'); // Create an h3 element for the product title
          productTitle.textContent = product.title; // Set the text content of the title
          productItem.appendChild(productTitle); // Append the title to the product item
  
          const productPrice = document.createElement('p'); // Create a p element for the product price
          productPrice.textContent = product.price; // Set the text content of the price
          productItem.appendChild(productPrice); // Append the price to the product item
  
          const productDescription = document.createElement('p');   // Create a p element for the product description
          productDescription.textContent = product.description;   // Set the text content of the description
          productItem.appendChild(productDescription);      // Append the description to the product item
  
          gridContainer.appendChild(productItem);    // Append the product item to the grid container
        });
      })
      .catch(error => console.log('Error fetching products:', error));    // Handle errors if any occur during the fetch operation
  });
