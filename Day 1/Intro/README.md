# Introduction to TypeScript

TypeScript is a strongly typed, object-oriented, compiled language. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript enhances JavaScript by adding static typing, interfaces, and other advanced features that help in building scalable and robust applications.

## Why TypeScript?
- **Type Safety**: TypeScript helps catch type-related errors at compile time, reducing runtime errors.
- **Improved Code Readability**: By adding type annotations, the code becomes easier to understand and maintain.
- **Better Tooling Support**: With static typing, modern IDEs offer better autocompletion, refactoring, and debugging features.
- **Supports Modern JavaScript**: TypeScript allows developers to use the latest JavaScript features and compiles them to JavaScript that runs in any browser or environment.
- **Large Ecosystem**: TypeScript is widely adopted in the industry and supported by many frameworks (e.g., Angular).

## Key Features of TypeScript

### 1. **Static Typing**
TypeScript introduces static typing, allowing you to define the types of variables, function parameters, and return values. This helps prevent type-related bugs.

Example:

`let age: number = 25; // Explicitly defining that 'age' is a number`

# TypeScript: Type Annotation and Type Inference

## Type Annotation
**Type annotation** is when you explicitly declare the type of a variable, function parameter, or return value. This helps TypeScript know exactly what type the value should be, reducing ambiguity and making the code more readable and predictable.

### Example:

`let age: number = 25;`
`let name: string = "Isra";`

`function greet(name: string): string {
  return 'Hello, ${name}';
}`
