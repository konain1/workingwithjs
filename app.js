


const fakeRequest =(url)=>{
    return new Promise((resolve,rejected)=>{

        let delay = Math.floor(Math.random() * 4);

        console.log(delay)

        setTimeout(() => {
            if(delay > 2){
                rejected('oops Time Out')
            }else{
                resolve('you can stream Now')
                
            }
        }, delay*1000);
       
    })

}

fakeRequest('pokemon').then((data)=>{
    console.log(data)
    new Promise((res,rej)=>{
        let delay = Math.floor(Math.random() * 4);

        console.log(delay)

        setTimeout(() => {
            if(delay > 2){
                rej('oops Time Out Again!!')
            }else{
                res('wanna download')
                
            }
        }, delay*1000);

    }).then((data)=>{
        console.log(data)
    }).catch((d)=>{
        console.log(d)
    })
}).catch((data)=>{
    console.log(data)
})