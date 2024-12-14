import rsa_algorithm from "./rsa_algorithm";

var method ;

let RSA_BACKup = document.getElementById("main_column_1").innerHTML;
document.getElementById('algorithms').addEventListener('change', function () {
  method = this.value;
  
  console.log(method);

      if (method == "RSA"){
        document.getElementById("main_column_1").innerHTML = RSA_BACKup;
        
      }
      if (method == "Diffie-Helman"){
        document.getElementById("main_column_1").innerHTML = RSA_BACKup;
        document.getElementById("input_name_1").innerHTML = "mOD 1";

      }
      if (method == "Viegenere"){
        document.getElementById("input_for_methods").innerHTML = "" ;
        
        console.log("3");
        
      };
}); 
function swap() {
  let method_btn = document.getElementById("selected_method") ; 
  let input = document.getElementById("input_box").value;
  console.log(document.getElementById("input_box").value); 
    if (method_btn.innerHTML == "Seçili Method Şifreleme"){
      method_btn.innerHTML = "Seçili Method Deşifreleme";
    }
      else {
        method_btn.innerHTML = "Seçili Method Şifreleme" ; 
      }
}

function getAlphabetqueue(array) {
  const turkceAlfabe = [
    "a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı", "i", 
    "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", 
    "u", "ü", "v", "y", "z", "w" , "q", "x"
  ];
  let index = turkceAlfabe.indexOf(array.toLowerCase());
  if (index != -1 ) return index + 1 ; 
  else return NULL ; 
}

function textParser(text) {
  const letters = text.split("").filter(char => /[a-zA-ZığüşöçİĞÜŞÖÇ]/.test(char));; 
  
  var convertedLetters = [] ; 
  for (let i = 0 ; i < letters.length ; i++) {
    
    convertedLetters[i] = getAlphabetqueue(letters[i]);
  }
  return convertedLetters;
}
function onClickCalculate(){
  const prime1 = document.getElementById("asal1").value;
  const prime2 = document.getElementById("asal2").value;
  const text = document.getElementById("input_box").value;
  calculateRSA(prime1,prime2,text,document.getElementById("selected_method").innerHTML);

}



                  function calculateRSA(prime1,prime2,text,method_btn){
                    var prime1 = 11 ;
                    var prime2 = 3 ; 
                    var n = prime1 * prime2 ; 
                    var r =(prime1 - 1)* (prime2 - 1);
                    var e = 3 ; 
                    var d = (1/e) % r ;
                    const letters = textParser(text);
                    
                 if (method_btn == "Seçili Method Şifreleme") {
                  console.log(letters);
              
                     var cryptedArray = [];
                    cryptedArray[0] = Math.pow(letters[0],e);
                    cryptedArray[0] = cryptedArray % n ; 
                    console.log("crypted[0]",cryptedArray[0]);
                  }
                   else if (method_btn == "Seçili Method Deşifreleme") {

                      var decryptedArray = [];
                      decryptedArray[0] = Math.pow(cryptedArray[0],d);
                      decryptedArray[0] = decryptedArray % n ; 
                      console.log("decrypted",decryptedArray[0]);
                      

                    }
                    else if(method_btn != "Seçili Method Deşifreleme" &&
                      method_btn != "Seçili Method Şifreleme"
                    ){
                      console.log("bum");
                    }
                  
                  }
  
