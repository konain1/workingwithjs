

// const pokemon = async ()=>{

    

//     throw  'wait..............'
//     return 'Pika Pika Pikachu'
// }

// pokemon().then((data)=>{
//     console.log('i choose you ' +data)
// }).catch((err)=>{
//     throw err
// })


const login = async (username,password) =>{
    if(!username || !password){
        throw 'Missing Crediential !'
    }

    if(password === 'doora'){
        return 'welcome'
    }

    throw 'wrong password'

}


login('zidane','doora').then((data)=>{
    console.log(data)
}).catch((data)=>{
    console.log(data)
})