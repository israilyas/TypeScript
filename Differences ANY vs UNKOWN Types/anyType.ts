// Any Type
// The any Type is the most flexible type in typeScript. It is essentially "turns off all type checking" for the variables or expressions it is applied to. 
// You will see any type when you first write the code

// === UseCases ===
// working with dynamic data: when dealing with data from dynamic sources like user input, network responses, or deserialized JSON objects, the any type can be useful.

// Migration from javascript: When migrating an existing JavaScript code to TypeScript, using any type can be convenient way to quickly annotate variables and functions immediately specifying their precise type.

let myFavNum:any = 10;
myFavNum = true;
myFavNum = "Ten";