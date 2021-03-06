// function countLengths(strings) {
//   return strings.reduce(function(output, string) {
//     // This is a "guard statement" that protects line 71 below from situations where the key is undefined
//     if (!output[string.length]) {
//       output[string.length] = 0;
//     }
//     output[string.length] += 1;
//     return output;
//   }, {});
// }
function countLengths(str){
  //First we make the string lowercase, take out the spaces, and split each character into an array of strings
  var noSpaces = str.split(" ").join("").toLowerCase();
  //empty variable that we will push the result of the .foreach to
  var chars = {};
//loop through noSpaces
  for (var i = 0; i < noSpaces.length; i++) {
    // letter variable is the character at whatever index it is on the count
     var letter = noSpaces[i];
     // if .foreach returns undefined (means there is only one of these characters) letter count is 1
    if(chars[letter] === undefined){
      chars[letter] = 1
      //if .forEach returns <=1 then we add a value of 1 to the amount of letter found
    } else {
      chars[letter] = chars[letter] +  1;
    }
  }
  return chars;
}

console.log(countLengths("l"));
