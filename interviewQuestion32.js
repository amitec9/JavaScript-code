let arr =[3,4,5,8]
let target =9
let low =0;
let high = arr.length
while(low <high)
{
    if(arr[low] + arr[high] === target)
    {
        console.log(low,high)
    }
    (arr[low] + arr[high] < target)? low++: high--;
}

//The time complexity of the above solution is O(n.log(n)) and doesn’t require any extra space.
