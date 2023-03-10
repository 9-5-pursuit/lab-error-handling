/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleProducts = [
  { id: 1, name: "Panel Headboard", priceInCents: 12332 },
  { id: 2, name: "Low Profile Sleigh Bed", priceInCents: 22999 },
  { id: 3, name: "Oval 100% Cotton Solid Bath Rug", priceInCents: 1399 },
  { id: 4, name: "Abstract Light Gray Area Rug", priceInCents: 33999 },
  { id: 5, name: "Multi Game Table", priceInCents: 81743 },
];
// Do not change the line above.

/*
  This function should throw an error if:
  - The `cart` array is empty.
*/

// if cart array is empty throw error
// cart.length === 0 throw error

function getCartTotal(cart) {

  if (cart.length === 0) {
    throw "Your cart is empty";
  }


  let result = 0;
  for (let product of cart) {
    result += product.priceInCents;
  }
  return result;
}

/*
  This function should throw an error if:
  - The `products` array is empty.
  - Either `min` or `max` is not a number.
  - `max` is equal to `0`.
  - `min` is greater than `max`.
  - Either `min` or `max` is less than `0`.
  - Any of the products in the `products` array does not have a `priceInCents` key.
*/

// 
function filterProductsByPriceRange(products, min, max) {
  // const result = [];

  // if (products.length === 0) {
  //   throw "Your cart is empty";
  // } else if (max === 0) {
  //   throw "Your cart is empty";
  // } else if (min === NaN || max === NaN) {
  //   throw "Your cart is empty";
  // } else if (min > max) {
  //   throw "Your cart is empty";
  // }

  if (products.length === 0) {
    throw "No products in array";
  }

  if (typeof min !== "number") {
    throw "This is not a number";
  } else if (typeof max !== "number") {
    throw "This is not a number";
  }

//shld throw an error if either min or max is less than 0

  if (min < 0 || max < 0) {
    throw "This parameter is less than zero";
  } else if (max === 0) {
    throw "Max parameter is equal to zero";
  }

  // if (!products.includes(priceInCents)) {
  //   throw "This product doesnt have priceInCents";
  // }
  
  const result = [];

  for (let product of products) {

    if (!product.priceInCents) {
      throw "This product doesnt have price in cents"
    }

    if (product.priceInCents >= min && product.priceInCents <= max) {
      result.push(product);
    }
  }

  return result;
}

/*
  If any errors occur in this function, it should return `0`.
*/

// 
function getTotalOfAllProductsByPriceRange(products, min, max) {

  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    return total;
  } catch (error) {
    return 0;
  }
  // const filteredProducts = filterProductsByPriceRange(products, min, max);
  // const total = getCartTotal(filteredProducts);

  return total;
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
