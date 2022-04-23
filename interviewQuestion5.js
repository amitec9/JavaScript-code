//input ;- num1 =36 num2 =54
//output :- 18


function mathC(num1,num2)
{
if(num2 ===0) return num1;
return mathC(num2,num1%num2);
}

console.log(mathC(36,54));
