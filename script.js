// fetch("").then(data=>console.log(data.json()))

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
let loadingAnimation = document.getElementById("loading")
let idpara = document.getElementById('idpara')
let para = document.getElementById('para')

const makeApiCall =()=>{
    console.log(loadingAnimation)
    //start animation
    loadingAnimation.style.opacity="1"
    para.innerText='' 
    para.className=""
fetch('https://api.adviceslip.com/advice')
.then(response => response.json()) //parsing js from json
.then(data => { console.log(data.slip.advice)
    // stop animation
    loadingAnimation.style.opacity="0"
    
    idpara.innerText="ADVICE #"+data.slip.id
    para.innerText='"'+data.slip.advice+'"'  
    para.className="fade-in"       
})
.catch(err => console.error(err));
}

makeApiCall()
//     fetch('https://api.adviceslip.com/advice')
//     .then(response => response.json()) //parsing js from json
//     .then(data => { console.log(data.slip.advice)
//         let card = document.getElementById('card')
//         console.log(card)
//         let para = document.createElement('p')
//         para.innerText=data.slip.advice
//         card.appendChild(para)         
//     })
//     .catch(err => console.error(err));

