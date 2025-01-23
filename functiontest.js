function createProduct(name, price, category, inStock) {
    if (inStock === void 0) { inStock = true; }
    console.log("Product: ".concat(name, ", price: \u20AC").concat(price, ", category: ").concat(category, ", In Stock: ").concat(inStock, " "));
}
console.log(createProduct('camera', 345));
