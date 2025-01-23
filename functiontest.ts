function createProduct(name: string, price: number, category?: string , inStock: boolean = true): void {
    console.log(`Product: ${name}, price: €${price}, category: ${category}, In Stock: ${inStock} `)
}

console.log(createProduct('camera', 345))