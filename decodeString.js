function decodeString(secretMessage) {
  let num = +(secretMessage[0])
  let answer = ''

  for (let i = 1; i < secretMessage.length; i++){
    let letterValue = secretMessage[i].charCodeAt() + num
    answer += String.fromCharCode(letterValue)
  }
  return answer
}

console.log(decodeString("1a"))
console.log(decodeString("3ce"))
console.log(decodeString("2fcjjm"))

// This function decodes a string by using index[0] to determine how many ascii units each letter should increase by.
// Since index[0] is a string, and not a number, it must first be set to a number. 
// To set index[0] to a string you can use +, NUM, or parseINT(string[0]).
// Create an empty variable, that accepts a string, for your answer. 
// Now, loop through your array starting at index  1, in order to avoid the number. 
// Create a variable to store the ascii value for each index, plus the number. 
// Push the array back into a string using the formCharCode method. 
// Return the result. 
