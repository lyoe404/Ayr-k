 function textParser(text) {
  const letters = text.split("").filter(char => /[a-zA-ZığüşöçİĞÜŞÖÇ]/.test(char));;
  console.log(letters[2]) ; 
  return letters;
}
module.exports = {textParser} ; 