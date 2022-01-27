// input 1246876543 output = 12_4_6_8_76_54_3
var myInt = 1246876543;
// Getting the string as a parameter
// and typecasting it into an integer
var myFunc = num => Number(num);
  
var arr = Array.from(String(myInt), myFunc);
        let number =[];
        for (num of arr){	
            if (num % 2 === 0) {  
                // 0 for even numbers and 1 for odd numbers.
                number.push(num,"_")
            }
            else
            {
                number.push(num)
            }
        }
      console.log(number.toString().replace(/,/g, ''));  
