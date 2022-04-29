var a=[1,2,3,4,1,3]
let b = new Set(a)
console.log(b)//1,2,3,4

var c = "5"-true//4
//"5"*false = 0
//"5"*true//5
//"5"/true = 5
//"5"/false =infintey
//"5"+true//5true
//"5"+false//5false
//"5"-false//5
console.log(c)

let user={name:"amit"};
let admin={name:"admin"};
function sayHi()
{
    console.log(this.name)
}
user.f=sayHi
admin.f=sayHi
admin['f']()//admin
user['f']()//amit

var add = 5+5+5+"5"+5+5
console.log(add)//15555
