

const pokemon = async ()=>{

    

    throw  'wait..............'
    return 'Pika Pika Pikachu'
}

pokemon().then((data)=>{
    console.log('i choose you ' +data)
}).catch((err)=>{
    throw err
})