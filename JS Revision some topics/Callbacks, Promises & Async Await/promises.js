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

//===============================================

