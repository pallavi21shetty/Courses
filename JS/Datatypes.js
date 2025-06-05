// Step 1: Explain Primitive Data Types
// Primitive data types are immutable and stored by value.

// String: Used to represent text
let stringExample = "Hello, World!";
console.log("String Example:", stringExample); // Output: Hello, World!

// Number: Represents both integer and floating-point numbers
let numberExample = 42;
let floatExample = 3.14;
console.log("Number Example:", numberExample); // Output: 42
console.log("Float Example:", floatExample); // Output: 3.14

// Boolean: Represents true or false
let booleanExample = true;
console.log("Boolean Example:", booleanExample); // Output: true

// Undefined: A variable that has been declared but not assigned a value
let undefinedExample;
console.log("Undefined Example:", undefinedExample); // Output: undefined

// Null: Represents the intentional absence of a value
let nullExample = null;
console.log("Null Example:", nullExample); // Output: null

// Symbol: Used to create unique identifiers (introduced in ES6)
let symbolExample = Symbol("unique");
console.log("Symbol Example:", symbolExample); // Output: Symbol(unique)

// BigInt: Used for integers larger than 2^53 - 1 (introduced in ES11)
let bigIntExample = 1234567890123456789012345678901234567890n;
console.log("BigInt Example:", bigIntExample); // Output: 1234567890123456789012345678901234567890n

// Step 2: Explain Non-Primitive Data Types
// Non-primitive data types are mutable and stored by reference.

// Object: A collection of key-value pairs
let objectExample = {
  name: "John",
  age: 30,
};
console.log("Object Example:", objectExample); // Output: { name: 'John', age: 30 }

// Array: A list of values
let arrayExample = [1, 2, 3, 4, 5];
console.log("Array Example:", arrayExample); // Output: [1, 2, 3, 4, 5]

// Function: A block of reusable code
function functionExample() {
  return "This is a function.";
}
console.log("Function Example:", functionExample()); // Output: This is a function.

// Date: Represents dates and times
let dateExample = new Date();
console.log("Date Example:", dateExample); // Output: Current date and time

// Step 3: Check Data Types with typeof
console.log("Type of String:", typeof stringExample); // Output: string
console.log("Type of Number:", typeof numberExample); // Output: number
console.log("Type of Boolean:", typeof booleanExample); // Output: boolean
console.log("Type of Undefined:", typeof undefinedExample); // Output: undefined
console.log("Type of Null (Note: this is a historical bug):", typeof nullExample); // Output: object
console.log("Type of Symbol:", typeof symbolExample); // Output: symbol
console.log("Type of BigInt:", typeof bigIntExample); // Output: bigint
console.log("Type of Object:", typeof objectExample); // Output: object
console.log("Type of Array (arrays are a type of object):", typeof arrayExample); // Output: object
console.log("Type of Function:", typeof functionExample); // Output: function

// Step 4: Differences Between Primitive and Non-Primitive
// Primitive: Stored by value
let primitive1 = 10;
let primitive2 = primitive1;
primitive2 = 20;
console.log("Primitive1:", primitive1); // Output: 10
console.log("Primitive2:", primitive2); // Output: 20

// Non-Primitive: Stored by reference
let nonPrimitive1 = { key: "value" };
let nonPrimitive2 = nonPrimitive1;
nonPrimitive2.key = "newValue";
console.log("NonPrimitive1:", nonPrimitive1); // Output: { key: 'newValue' }
console.log("NonPrimitive2:", nonPrimitive2); // Output: { key: 'newValue' }