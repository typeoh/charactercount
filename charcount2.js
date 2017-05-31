function countLengths(str){
  //First we make the string lowercase, take out the spaces
  var noSpaces = str.split(" ").join("").toLowerCase();
  //empty variable that we will push the result of the .foreach to
  var chars = {};
//loop through noSpaces
  for (var i = 0; i < noSpaces.length; i++) {
    // letter variable is the character at whatever index it is on the count
     var letter = noSpaces[i];

     // if .foreach returns undefined (means there is only one of these characters) letter count is 1
    if(chars[letter] === undefined){
      //now chars letter is return the index number
      chars[letter] = [i];
      //if .forEach returns <=1 then we add a value of 1 to the amount of letter found
    } else {
      chars[letter].push(i);
    }
     // var index = str.indexOf(chars[letter]);
  }
  return chars;
}

console.log(countLengths("batty"));
