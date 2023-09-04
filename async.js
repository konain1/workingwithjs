

// const pokemon = async ()=>{

    

//     throw  'wait..............'
//     return 'Pika Pika Pikachu'
// }

// pokemon().then((data)=>{
//     console.log('i choose you ' +data)
// }).catch((err)=>{
//     throw err
// })


// const login = async (username,password) =>{
//     if(!username || !password){
//         throw 'Missing Crediential !'
//     }

//     if(password === 'doora'){
//         return 'welcome'
//     }

//     throw 'wrong password'

// }


// login('zidane','doora').then((data)=>{
//     console.log(data)
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


async function rainbow(){
    await changeColorPromise('red',1000)
    await changeColorPromise('green',1000)
    await changeColorPromise('yellow',1000)
    await changeColorPromise('magenta',1000)
    await changeColorPromise('lightgreen',1000)
    await changeColorPromise('pink',1000)





}

rainbow()