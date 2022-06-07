
let arr =[1,2,3,10,5,1,0]

for(let i =0;i<arr.length-1;i++)
{
    let temp;
    if(arr[i]>arr[i+1])
    {
        temp = arr[i];
        arr[i]= arr[i+1]
        arr[i+1]=temp;
        i = -1
    }

}
console.log(arr)
