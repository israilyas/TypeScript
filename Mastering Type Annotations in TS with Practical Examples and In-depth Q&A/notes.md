# Introduction to Types in TypeScript

In Typescript , type annotation is a way of explcitly(by userself) specifying the typp of a variable, function parameter, or function return value.

## Advantages 

- It helps the typescript compiler to enforce checking and provide type safety during development

- what operation could we perform on that variable or value

- Type annotation are expressed by using colon (:) followed by the desired type after the variable or function parameter declaration. There can be a space after the colon.

Example:

`let myNum:number = 20;`
`let myName:string = 'ISRA'`

---

## Number Type

The number type represents numeric values,inclusding integers and floating-point numbers.

Number types in TypeScript support arithmetic operations such as

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

The result of those operatins on numbers is also of tpe number.

## NaN 

- In TypeScript, the assignment of NaN to a variable of type number is valid because NaN is a special value of the number type.

### Here’s why:

- TypeScript Type System: In TypeScript, NaN (Not-a-Number) is a valid value for the number type. It represents an invalid number or an unrepresentable result of a numeric operation (e.g., 0/0).

- NaN is of Type number: Since NaN is part of JavaScript’s number type, and TypeScript is a superset of JavaScript, TypeScript allows NaN to be assigned to variables of type number. This is why the following code works without any type errors:

`let nanValue: number = NaN;`
`console.log(nanValue); // NaN`




