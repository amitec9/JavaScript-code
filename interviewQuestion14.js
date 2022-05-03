let arr =[2,34,5,1]
let temp;
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<arr.length;j++)
    {
        if(arr[i]>arr[j])

        {
            temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp;
        }
    }
}

for(let k=0;k<arr.length;k++)
{
    console.log("arr",arr[k])
}
