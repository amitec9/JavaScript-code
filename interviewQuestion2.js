let arr = [1,5,7,6]
let target =11;
for (let i=0; i<arr.length;i++)
{
let a = arr[i];
for(x=i+1;x<arr.length;x++)
{
let b = arr[x];
if((a+b) == target)
{
console.log(a,b);
}

}
