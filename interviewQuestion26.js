
const my = new Promise((resolve,reject)=>setTimeout(()=>(reject("Amit"),0)))
my.then(res=>{console.log(res)}).catch(err=>{console.log("err",err)})
