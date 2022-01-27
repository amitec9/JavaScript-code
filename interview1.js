//output i , input abhishekab
function firstNonRepeatedCharacter(string) {
    return string.split('').filter(function (character, index, obj) {
        return obj.indexOf(character) === obj.lastIndexOf(character);
    }).shift();
}

console.log(firstNonRepeatedCharacter('abhishekab'));
