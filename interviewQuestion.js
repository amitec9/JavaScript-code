//input 3457 output 3574
//input 527  output 572

Author :- Amit kumar
var myInt = 3457;
// Getting the string as a parameter
// and typecasting it into an integer
let myFunc = num => Number(num);
  
var intArr = Array.from(String(myInt), myFunc);
let s= intArr.sort()

 for (var i = 0; i < s.length; i++) {
      if (s[i]%2 == 0) {
        s.push(s.splice(i, 1)[0]);
      }
    }
console.log(parseInt(s.toString().replace(/,/g, '')));
