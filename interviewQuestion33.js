let arr = [1,2,3,1,1,1,3]
  let a = new Map()
  
  for(let i =0;i<arr.length; i++)
  {
    if(a.has(arr[i]))
    {
      a.set(arr[i],a.get(arr[i]) +1)
    }
    else{
      a.set(arr[i], 1)
    }
    
  }
  //console.log(a)
  
  let d = false;
  for(let [key,value ] of a)
  {
  if(value >1)
  {
   console.log(key + " ")
   d = true
  } 
  }
  
  if(d == false)
  {
    console.log("-1")
  }
