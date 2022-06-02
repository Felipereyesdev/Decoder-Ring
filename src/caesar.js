// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if ((shift > 25 || shift === 0 || shift < -25))
      return false;
    let result = [];
    let shifa = shift * -1;
    const lowerCaseInput = input.toLowerCase();
    for(let i = 0; i<lowerCaseInput.length; i++){
      let characterCode = lowerCaseInput[i].charCodeAt();
      if(characterCode < 97 || characterCode > 122){
        result.push(lowerCaseInput[i]);
        continue;
      }
      let resultChar = encode === false  ? characterCode + shifa : characterCode + shift; 
      console.log(resultChar)
      if(resultChar >= 97 && resultChar <= 122){
        result.push(String.fromCharCode(resultChar))
       
      } 
      else if(resultChar < 97) {
        result.push(String.fromCharCode(resultChar +26));

      } else{
        result.push(String.fromCharCode(resultChar -26));
      }
      // else if(lowerCaseInput.charCodeAt() >= 110 && lowerCaseInput.charCodeAt() <= 122){
      //   result.push(String.fromCharCode(lowerCaseInput.charCodeAt() + shift))
      // }
      // else if(lowerCaseInput.charCodeAt() >= 97 && lowerCaseInput.charCodeAt() <= 109 && encode === false){
      //   result.push(String.fromCharCode(lowerCaseInput.charCodeAt() + shifa))
        
      // }
      // else if(lowerCaseInput.charCodeAt() >= 110 && lowerCaseInput.charCodeAt() <= 122 && encode === false){
      //   result.push(String.fromCharCode(lowerCaseInput.charCodeAt()+ shifa))

      // }
      // else if(lowerCaseInput.charCodeAt() + shift >= 122){
      
        

      // }
      // else if(lowerCaseInput.charCodeAt()< 97){
      //   result.push(lowerCaseInput[i])
      // }
    }
    
    return result.join("");
  }

  return {
    caesar,
  };
})();



module.exports = { caesar: caesarModule.caesar };
