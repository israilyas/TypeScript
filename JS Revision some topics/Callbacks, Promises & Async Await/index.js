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
// ==================================
// ===== Callback Hell =====



// function getData(dataId, nextCallBack) {// 2sec
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (nextCallBack) {
//             nextCallBack()
//         }
//     }, 2000);
// }

// CallBack hell

// getData(1, () => {
//     console.log("Getting Data 2....")
//     getData(2, () => {
//         console.log("Getting Data 3....")
//         getData(3, () => {
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
        }, 2000);
    })
}

// === Better Way Promise Chaining ===

// getData(123)
//     .then((res) => {
//         console.log(res)
//         console.log("Getting data1....")
//         return getData(234);
//     })
//     .then((res) => {
//         console.log(res)
//         console.log("Getting data2....")
//         return getData(345);
//     })
//     .then((res) => {
//         console.log(res)
//         console.log("Getting data3....")
//         return getData(456);
//     })

// ==== async await===
async function getAllData() {
    console.log("Getting data1....")
    await getData(1);
    console.log("Getting data2....")
    await getData(2);
    console.log("Getting data3....")
    await getData(3);
    console.log("Getting data4....")
    await getData(4);
    console.log("Getting data5....")
    await getData(5);
}
getAllData();