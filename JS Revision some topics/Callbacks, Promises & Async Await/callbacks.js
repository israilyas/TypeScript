// ==== CallBacks ====

// a callback is a function passed as an argument to another function.

// In async programming

// function sum(a, b) {
//     console.log(a + b)
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

//calculator(4,5,sum)// dont pass callback with () bcz when we use () we execute function immediately there.

// calculator(6,8,(a,b)=>{
//     console.log(a + b)
// })

// In Sync Programming

// function hello() {
//     console.log("Hello, i am hello func")
// }

// setTimeout(hello,3000);

// ===== Callback Hell =====

// Callback hell =>  Nested calbacks  below one another forming pyramid structure. (pyramid of Doom)
// This style of programming becomes difficult to understand and manage.

// function getData(dataId){// 2sec
//     setTimeout(()=>{
//         console.log("data", dataId)
//     },2000);
// }

// getData(1);//2s
// getData(2);//2s
// getData(3);//2s

//data1
//data2
//data3

// function getData(dataId,nextCallBack){// 2sec
//     setTimeout(()=>{
//         console.log("data", dataId)
//         if (nextCallBack) {
//             nextCallBack() 
//         }
//     },2000);
// }

// // CallBack hell

// getData(1,()=>{
//     console.log("Getting Data 2....")
//     getData(2,()=>{
//         console.log("Getting Data 3....")
//         getData(3,()=>{
//             console.log("Getting Data 4....")
//             getData(4)
//         })
//     });
// })