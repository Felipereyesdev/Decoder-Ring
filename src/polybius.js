// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encoder = { 'a': '11', 'b': '12', 'c': '13', 'd': '14', 'e': '15', 'f': '21', 'g': '22', 'h': '23', 'i/j': '24', 'k': '25', 'l': '31', 'm': '32', 'n': '33', 'o': '34', 'p': '35', 'q': '41', 'r': '42', 's': '43', 't': '44', 'u': '45', 'v': '51', 'w': '52', 'x': '53', 'y': '54', 'z': '55' };
const decoder = { '11': 'a', '12': 'b', '13': 'c', '14': 'd', '15': 'e', '21': 'f', '22': 'g', '23': 'h', '24': 'i/j', '25': 'k', '31': 'l', '32': 'm', '33': 'n', '34': 'o', '35': 'p', '41': 'q', '42': 'r', '43': 's', '44': 't', '45': 'u', '51': 'v', '52': 'w', '53': 'x', '54': 'y', '55': 'z' };


  function polybius(input, encode = true) {
    let omega = {
      a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22",
      h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33",
      o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55", [' ']: " "
    };
    let decoded = {
     11: "a", 12: "f", 13: "l", 14: "q", 15: "v", 21: "b", 22: "g",
     23: "m", 24: "r", 25: "w", 31: "c", 32: "h", 33: "n", 34: "s",
     35: "x", 41: "d", 42: "(i/j)", 43: "o", 44: "t", 45: "y",
     51: "e", 52: "k", 53: "p", 54: "u", 55: "z", [' ']: " "
    };
    
    if(encode) {
      return input.split('').map(letter => {
 return omega[letter.toLowerCase()]
      }).join('');
    }
    else {
      if(input.replace(/\s/g,'').length %2 !==0) {
        return false
      }
      return input.match(/[0-9]{2}|\s/g).map(number => {
        return decoded[number]
      }).join('')
    }

   

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
