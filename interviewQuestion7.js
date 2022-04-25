const pro = new Promise((resovle,reject)=>{
    //resovle(8)
 reject(5)
})
pro.then((result)=>{return 6}).catch((error)=>{console.log("first",error)})
.then((result)=>{console.log( "test",result);return 6}).catch((error)=>{console.log("sec",error)})// first 5
//test undefined
