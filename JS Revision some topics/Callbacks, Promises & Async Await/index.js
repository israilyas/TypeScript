//What this chapter is about

// async await >> promise chains >> callback hell

// ==== Sync in JS(synchronous) ====
// synchronous means the code runs in a particular sequence of instructions given in the programme. Each instruction waits for previous instruction to complete its execution.

// console.log("One")
// console.log("Two")
// console.log("Three")

// ==== Asynchronous ==== 
// Due to synchronous programming sometimes important instructions get blocked due to some previos instructions, which causes a delay in the UI. 
// Asynchronous code execution allows to execute next instructions immediately and does not block the flow.

// console.log("One")
// console.log("Two")
// console.log("Three")
// setTimeout(()=>{
//     console.log("Hello, i am in settimeout...")
// },2000)

// console.log("four")
// console.log("five")
// ================================


// ==== CallBacks ====

// a callback is a function passed as an argument to another function.

// In async programming

function sum(a, b) {
    console.log(a + b)
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

//calculator(4,5,sum)// dont pass callback with () bcz when we use () we execute function immediately there.

// calculator(6,8,(a,b)=>{
//     console.log(a + b)
// })

// In Sync Programming

function hello() {
    console.log("Hello, i am hello func")
}

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

// By Promise Chaining

function getData(dataId) {// 2sec
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("Success")
        }, 4000);
    })
}

// console.log("getting data123")
// getData(123).then((res) => {
//     console.log(res)
//     console.log("getting data234")
//     getData(234).then((res) => {
//         console.log(res)
//         console.log("getting data345")
//         getData(345).then((res) => {
//             console.log(res)
//         })
//     })
// })

// === Better Way Promise Chaining ===

getData(123)
    .then((res)=>{
        console.log(res)
        return getData(234);
    })
    .then((res)=>{
        console.log(res)
        return getData(345);
    })
    .then((res)=>{
        console.log(res)
        return getData(456);
    })


// ===== Promises =====
// Promise is for "eventual" completion of task. it is an objject in JS.  It is solution to callback hell

// Promise is an object in javascript
// 2 handlers => resolve,reject
// resolve and reject are callbacks provided by JS
// Promise have => prototype, promiseState, promiseResult

// ==== Three states ====
//1) pending => the result is undefined
//2)fulfilled =>the result is a value (fulfilled) => resolve(result)
//3) rejected => the result is an error object => reject(error)

// we dont create promise When we request an api for data ==> api returns promise => and then we get data from promise

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise.");
//     // resolve("Promise is resolve.");
//     reject("Promise is rejected.");
// })

// Creating Promises

// function getData(dataId, nextCallBack) {// 2sec
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId)
//             // resolve('success')
//             reject('promise rejected')
//             if (nextCallBack) {
//                 nextCallBack()
//             }
//         }, 5000);
//     })
// }

// How to use Promises

//.then() & .catch()
// Fulfilled => .then(function)
// Reject => .catch(function)

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise.")
//         resolve("success")
//         // reject("Network Error");
//     });
// }

// let promise = getPromise();
// // res parameter in then
// promise.then((res)=>{
//     console.log("Promise Resolved..",res)
// })
// // err parameter in catch
// promise.catch((err)=>{
//     console.log("Rejected",err)
// })

// ==== Promise Chain ====

// function asyncFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 4000)
//     });
// };
// function asyncFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 4000)
//     });
// };

// console.log("Fetching Data1")

// let p1 = asyncFun();
// p1.then((res)=>{
//     console.log("Promise Resolved",res)
// })

// console.log("Fetching Data2")
// let p2 = asyncFun2();
// p2.then((res)=>{
//     console.log("Promise Resolved",res)
// })

// Make chaining of then
// asyncFun().then((res) => {
//     console.log("Promise Resolved 1", res);
//     asyncFun2().then((res) => {
//         console.log("Promise Resolved 2", res)
//     })
// })