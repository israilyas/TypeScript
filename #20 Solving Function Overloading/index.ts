
// function add(a:number,b:number):number; //Call signature
// function add(a:string,b:string):string; //Call signature
// function add(a:any,b:any):any{
//     return a +  b;
// }

// By Using Generic

// Multible Type Variables in Generics

function add<T,U>(a:T,b:U,c:boolean){
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
}

let result1 = add(5,'Isra',true);
let result2 = add('Hellow','World',false);
let result3 = add('Hellow',55,true);