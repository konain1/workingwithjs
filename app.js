



// const fakeRequest =(url)=>{
//     return new Promise((resolve,rejected)=>{

//         let delay = Math.floor(Math.random() * 4);

//         console.log(delay)

//         setTimeout(() => {
//             if(delay > 2){
//                 rejected('oops Time Out')
//             }
//                 resolve('you can stream Now')
                
            
//         }, delay*1000);
       
//     })
// }


// fakeRequest('pokemon').then((data)=>{
//     console.log(data)
//     new Promise((res,rej)=>{
//         let delay = Math.floor(Math.random() * 4);

//         console.log(delay)

//         setTimeout(() => {
//             if(delay <2){
                
//               res('here we go')
//             }
//             rej('its over')
//         }, delay*1000);

//     }).then((data)=>{
//         console.log(data)
//     }).catch((d)=>{
//         console.log(d)
//     })
// }).catch((data)=>{
//     console.log(data)
// })


const changeColorPromise = (color,delay)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            document.body.style.backgroundColor = color;
            resolve('background has changed');
        }, delay);


    })
}

changeColorPromise('red',1000).then((data)=>{
    return changeColorPromise('green',1000)
}).then(()=>{
    return changeColorPromise('yellow',1000)

})
.then(()=>  changeColorPromise('lightpink',1000) )
.then(()=> changeColorPromise('magenta',1000))
.then(()=> changeColorPromise('purple',1000))
.catch((error)=>{
    console.log(error)
})