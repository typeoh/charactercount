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

  for (var i = 0; i < noSpaces.length; i++) {
     var letter = noSpaces[i];
    if(chars[letter] === undefined){
      chars[letter] = 1
    } else {
      chars[letter] = chars[letter] +  1;
    }
    console.log(chars)
  }
  return chars;
}

console.log(countLengths("loopy loopy lighthouse"));
