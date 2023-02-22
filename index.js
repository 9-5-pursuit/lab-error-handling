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
//
//The function "getCartTotal" takes in an array of products (cart) and checks if the provided array contains elements. If the cart array is empty, it throws an error "Cart is empty". Otherwise, it iterates over the cart and accumulates the total of all the products' priceInCents values and returns the result.
function getCartTotal(cart) {
  if (cart.length === 0) {
    throw "Cart is empty";
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
//This function checks if the provided array of products contains elements and that the provided parameters for minimum and maximum for price in cents are valid. Then, it filters the product array by the given price range, ensuring each product has the priceInCents property and pushing every product within the min and max to a result array before finally returning that array. If any errors occur, it throws an error with an appropriate message.
function filterProductsByPriceRange(products, min, max) {
  if (products.length === 0) {
    throw "Products array is empty";
  }
  if (typeof min !== "number" || typeof max !== "number") {
    throw "Min or max is not a number";
  }
  if (max === 0) {
    throw "Max cannot equal 0.";
  }
  if (min > max) {
    throw "Max must be greater than min";
  }
  if (min < 0 || max < 0) {
    throw "Min nor max can be less than 0.";
  }

  const result = [];
  for (let product of products) {
    if (!product.priceInCents) {
      throw `Not all products have a priceInCents property.`;
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
//The function "getTotalOfAllProductsByPriceRange" takes in three parameters: an array of products, a minimum price, and a maximum price. The first line uses the function "filterProductsByPriceRange" to filter the products array by the given minimum and maximum prices. The next line calls the "getCartTotal" function on the filtered products to get the total of the cart and stores it in a variable called "total". The last line returns the total to the caller of the function and if an error occurs, the program will return a 0 value.
function getTotalOfAllProductsByPriceRange(products, min, max) {
  try {
    const filteredProducts = filterProductsByPriceRange(products, min, max);
    const total = getCartTotal(filteredProducts);
    return total;
  } catch (error) {
    return 0;
  }
}

module.exports = {
  getCartTotal,
  filterProductsByPriceRange,
  getTotalOfAllProductsByPriceRange,
};
