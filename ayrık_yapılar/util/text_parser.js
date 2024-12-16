//TEXTPARSER  
export function textParser(text) {
  const letters = text.split("").filter(char => /[a-zA-ZığüşöçİĞÜŞÖÇ 1234567890!,+#*-=]/,/%/);; 
  
  var convertedLetters = [] ; 
  for (let i = 0 ; i < letters.length ; i++) {
    
    convertedLetters[i] = getAlphabethQueue(letters , i );
  }
  return convertedLetters;
} ; 


// ALPHABET QUERIES OF LETTERS
  function getAlphabethQueue(array , i ) {

  const turkceAlfabe = [
  "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", 
  "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", 
  "u", "ü", "v", "y", "z", "w", "q", "x", " ", "0", "1", "2", 
  "3", "4", "5", "6", "7", "8", "9", ".", ",", "*", "!", "=", 
  "#", "+", "-", "%", "(", ")", "/", "%", "[", "]"
  ];

  console.log(array);
    let index = turkceAlfabe.indexOf(array[i].toLowerCase());

    if (index != -1 ) return index + 1 ; 
    else return NULL ;


  
} ; 