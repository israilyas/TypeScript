const URL = 'https://cat-fact.herokuapp.com/facts';
let text = document.getElementById('text');
let created = document.getElementById('created');
let btn = document.getElementById('btn');


// const getFacts = async ()=>{
//     let response = await fetch(URL);
//     let data = await response.json()
//     // console.log(response)
//     // console.log(data[0])
//     console.log(data[0].createdAt)
//     console.log(data[0].text)
//     text.innerText = data[0].text
//     created.innerText = data[0].createdAt
// }

// Promise Chaining
function getFacts() {
    fetch(URL).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        text.innerText = data[0].text
        created.innerText = data[0].createdAt
    })
}

btn.addEventListener('click',getFacts)

