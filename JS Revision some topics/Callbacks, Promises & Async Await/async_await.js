// ==== ASYNC AWAIT ======

// Keywords,
// make asynchronoous programming easy
// async function always returns promise

async function hello() {
    console.log("hello")
}

// === Await === (to wait)
//await pause the  execution of its surrounding async  function until the promise is settled.
//  we can only use await inside of async function

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data")
            resolve(200)
        }, 5000)
    })
}


// async function getWeatherData() {
//     await api(); //1st call
//     await api(); //2nd call
//     await api(); //3rd call
// }
// getWeatherData();

//
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