interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}

function displayProduct(product: Product): string {
    return `${product.name} - ${product.price} (${product.inStock ? "In stock" : "Out of stock"})`
}