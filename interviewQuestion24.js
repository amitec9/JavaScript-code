
let obj = {name:"amit",last:"kumar"}
let obj2 = {name:"rohan",last:"kumar"}

let fullName = function(age , mob){
console.log(this.name + " " + this.last , " age " + age , "mob " + mob )
}
//function bolwing

fullName.call(obj,"25","999977900")
fullName.apply(obj2,["27","900-09880"])
let data = fullName.bind(obj2,"27","9097880")
data()
