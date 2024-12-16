//METHOD UI & PARAM SWAPPER
import * as RSA from "./rsa_algorithm.js";

export function method_swapper () {
  let method_btn = document.getElementById("selected_method") ; 
      if (method_btn.innerHTML == "Seçili Method Şifreleme"){
        method_btn.innerHTML = "Seçili Method Deşifreleme";   
        document.getElementById("main_column_1"); 
        return "decrypt";    
      }
              else {
          method_btn.innerHTML = "Seçili Method Şifreleme" ; 
          return "encrypt";
        }
  ;
}
//ALGORITHM UI & PARAM SWAPPER 
export function algorithm_swapper(algorithm,RsaBackUp,method) {
    if (algorithm == "RSA"){
      document.getElementById("main_column_1").innerHTML = RsaBackUp;
      document.getElementById("output_text").innerHTML = "" ; 
      document.getElementById("steps_area").innerHTML = "";
        }
        if (algorithm == "Diffie-Helman"){
        document.getElementById("main_column_1").innerHTML = RsaBackUp;
        document.getElementById("input_name_1").innerHTML = "mOD 1";
        document.getElementById("output_text").innerHTML = "" ; 
        document.getElementById("steps_area").innerHTML = "";

        }
          if (algorithm == "Viegenere"){
            document.getElementById("main_column_1").innerHTML = RsaBackUp ;
            document.getElementById("input_name_1").innerHTML = "viegenere";
            document.getElementById("output_text").innerHTML = "" ; 
            document.getElementById("steps_area").innerHTML = "";
            
            console.log("3");
            
        };
} ; 
// ALPHABET QUERIES OF LETTERS
export function getAlphabethQueue(array , i ) {

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
//TEXTPARSER  
export function textParser(text) {
  const letters = text.split("").filter(char => /[a-zA-ZığüşöçİĞÜŞÖÇ 1234567890!,+#*-=]/,/%/);; 
  
  var convertedLetters = [] ; 
  for (let i = 0 ; i < letters.length ; i++) {
    
    convertedLetters[i] = getAlphabethQueue(letters , i );
  }
  return convertedLetters;
} ; 
// ALGORITHM ROUTER
export function algorithmRouter(prime1, prime2,method, algorithm,text){

    if (algorithm == "RSA") {
        if (method == "encrypt") {
            return  RSA.calculateRSA(prime1,prime2,text,method);
        }
        

        if (method == "decrypt"){
          console.log("geldi");
          outputparserRSA(text);

        } 


    }
    if (algorithm == "Diffie-Helman") {
      if (method == "encrypt") {
        console.log("geldi");
  }


  if (method == "decrypt"){
        console.log("geldidecrypt");
        
  } 

    }
    if (algorithm == "Viegenere") {
      if (method == "encrypt") {
        console.log("geldi");
  }
  if (method == "decrypt"){
        console.log("geldidecrypt");
  } 

    }
}

export function outputparserRSA(text){ 
const parsedArray = text.split('-').map(Number);
return parsedArray;

}
