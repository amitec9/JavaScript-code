Promise.resolve(10)
.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})


const data = new Promise((resolve,reject)=>{
    resolve(20)
})

data.then((r)=>{console.log(r)}).catch((err)=>{console.log(err)})

async function add(){
      try{

        let result = await data;
        console.log(result)
        //throw new Error("errr ");

        setTimeout(()=>{console.log("test")},2000)
      }catch(err)
      {
        console.log(err)
      }

}

add()
