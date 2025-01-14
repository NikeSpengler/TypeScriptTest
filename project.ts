interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

function displayProduct(product: Product): string {
    return `${product.name} - ${product.price} (${product.inStock ? "In stock" : "Out of stock"})`
}

let laptop: Product = {
    id: 1, 
    name: 'SuperBook',
    price: 1299.99,
    inStock: true

}

console.log(displayProduct(laptop))