let fun1 = async () => {
  return await new Promise((resolve, reject) => {
    resolve(10);
  });
};

let fun = async () => {
  try {
     let res = await fun1();
    console.log("res",res);
    return res;
  } catch (err) {
    console.log(err);
  }
}
console.log(fun())
//.then((data)=>{console.log(data)});
