function reversedString(str){
  let reversed = str.split("").reverse().join("");
  console.log("Reversed string is:", reversed);
  return reversed;
}
reversedString("Hello")