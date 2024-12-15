//METHOD UI & PARAM SWAPPER

export function method_swapper () {
  let method_btn = document.getElementById("selected_method") ; 
      if (method_btn.innerHTML == "Seçili Method Şifreleme"){
        method_btn.innerHTML = "Seçili Method Deşifreleme";   
        return "decrypt";    
      }
              else {
          method_btn.innerHTML = "Seçili Method Şifreleme" ; 
          return "encrypt";
        }
  ;
}
//ALGORITHM UI & PARAM SWAPPER 
export function algorithm_swapper(algorithm,RsaBackUp) {
    if (algorithm == "RSA"){
        document.getElementById("main_column_1").innerHTML = RsaBackUp;
        }
        if (algorithm == "Diffie-Helman"){
        document.getElementById("main_column_1").innerHTML = RsaBackUp;
          document.getElementById("input_name_1").innerHTML = "mOD 1";
  
        }
        if (algorithm == "Viegenere"){
          document.getElementById("main_column_1").innerHTML = RsaBackUp ;
          document.getElementById("input_name_1").innerHTML = "viegenere";

          
          console.log("3");
            
        };
} ; 
// ALPHABET QUERIES OF LETTERS
export function getAlphabethQueue(array , i ) {

  const turkceAlfabe = [
    "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", 
    "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", 
    "u", "ü", "v", "y", "z", "w" , "q", "x"
  ];
    let index = turkceAlfabe.indexOf(array[i].toLowerCase());
    if (index != -1 ) return index + 1 ; 
    else return NULL ;
  
} ; 
//TEXTPARSER
export function textParser(text) {
  const letters = text.split("").filter(char => /[a-zA-ZığüşöçİĞÜŞÖÇ]/.test(char));; 
  
  var convertedLetters = [] ; 
  for (let i = 0 ; i < letters.length ; i++) {
    
    convertedLetters[i] = getAlphabethQueue(letters , i );
  }
  return convertedLetters;
} ; 
// ALGORITHM ROUTER
export function algorithmRouter(method , algorithm){


}