Promise.resolve(10)
  .then((r) => {
    console.log(r);
    return r;
  })
  .catch((err) => {
    console.log(err);
  })
  .then((r) => {
    console.log(r);
    return r;
  })
  .catch((err) => {
    console.log(err);
  })
  .then((r) => {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log(r*r),resolve(r)},2000)
      })
  })
  .catch((err) => {
    console.log(err);
  })
  .then((r) => {
    console.log(r);
    return r;
  })
  .catch((err) => {
    console.log(err);
  })
  .then((r) => {
    console.log(r);
    return r;
  })
  .catch((err) => {
    console.log(err);
  });
