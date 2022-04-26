function fun(str)
{
    let i;
    let strrev = []
    for( i=str.length-1;i>=0;i--)
    {
        
       strrev.push(str[i])
    }
    return strrev;
}
 console.log(fun("heloo").join(""))
