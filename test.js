let p =new Promise(
    (r,rr)=>{
        
        setTimeout(
            ()=>{
                r();
                console.log(1)
            },300
        )

        setTimeout(
            ()=>{
                rr();
                console.log(2)
            },300
        )       
    }
) 