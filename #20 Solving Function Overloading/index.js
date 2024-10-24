// function add(a:number,b:number):number; //Call signature
// function add(a:string,b:string):string; //Call signature
// function add(a:any,b:any):any{
//     return a +  b;
// }
// By Using Generic
// Multible Type Variables in Generics
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
var result1 = add(5, 'Isra');
var result2 = add('Hellow', 'World');
var result3 = add('Hellow', 55);
