// fetch("").then(data=>console.log(data.json()))
console.log("masti")
// const ul = 
// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(response => response.json())
// 	.then(data => {
//         for(let i=0; i<10; i++){
//             console.log(data[i].name)
//             let li = document.createElement("li")
//             li.innerText = data[i].name
//             document.getElementById("ul").appendChild(li)
//         }
//     })
// 	.catch(err => console.error(err));
fetch('https://api.adviceslip.com/advice')
.then(response => response.json()) //parsing js from json
.then(data => { console.log(data.slip.advice)
    
    let para = document.getElementById('para')
    para.innerText=data.slip.advice
             
})
.catch(err => console.error(err));

    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json()) //parsing js from json
    .then(data => { console.log(data.slip.advice)
        let card = document.getElementById('card')
        console.log(card)
        let para = document.createElement('p')
        para.innerText=data.slip.advice
        card.appendChild(para)         
    })
    .catch(err => console.error(err));

