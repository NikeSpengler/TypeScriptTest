// Varibale annotation
let message: string = 'Hello TypeScript!'

// Function parameter and return type annotation
function greet(name: string): string {
    return `Hello, ${name}`
}

greet('Jenny')


// Arrow function annotation
const multiply: (a: number, b: number) => number = (a,b) => (a * b)

multiply (4,5)