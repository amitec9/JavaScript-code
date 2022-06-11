
const arr =[0,1,2,3,4,5,6,7,8,9]

for(var i=0;i<10;i++)
{
    setTimeout(function(){console.log(arr[i])},1000*i)
}
