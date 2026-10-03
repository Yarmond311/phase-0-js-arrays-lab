var products = ["Laptop", "Phone", "Headphones", "Monitor"];

function printFirstProduct() {
  console.log(products[0]);
}

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName) {
  products.push(productName);
}

function updateProductName(index, newName) {
  products[index] = newName;
}

function removeLastProduct() {
  products.pop();
}

module.exports = {
  products: products,
  printFirstProduct: printFirstProduct,
  logFirstProduct: logFirstProduct,
  addProduct: addProduct,
  updateProductName: updateProductName,
  removeLastProduct: removeLastProduct
};
