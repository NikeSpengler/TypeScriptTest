function displayProduct(product) {
    return "".concat(product.name, " - ").concat(product.price, " (").concat(product.inStock ? "In stock" : "Out of stock", ")");
}
var laptop = {
    id: 1,
    name: 'SuperBook',
    price: 1299.99,
    inStock: true
};
console.log(displayProduct(laptop));
