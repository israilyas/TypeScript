//IIFE +>  immediately invoked function
//(function without name)();

// ==== Use Cases ====
// 1) Avoid polluting the global namespace
// To limit the number  of global variables
// 2) Execute an async function

function getData(dataId) {// 2sec
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("Success")
        }, 2000);
    })
}


// === IIFE ===
(async function () {
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
})();
