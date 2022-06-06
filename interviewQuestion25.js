
function wordsReverser(){
    let str3= "team tech  to welcome"
    let words = str3.split(' ');
    let data =[]
    console.log(words)
    for(i=words.length-1;i>=0;i--)
    {
        data.push(words[i])
    
    }
    console.log(data)
    // let result = [];
    // for(let i = 0; i < words.length; i ++){
    //   result.push(words[i].split('').reverse().join(''));
    // }  
    
    // console.log(result.join(' '));
 }
 
wordsReverser()
