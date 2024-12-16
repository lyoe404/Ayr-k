import * as util from '../util/output_parser.js';
import * as text_parser from "../util/text_parser.js"

var steps_text = [] ; 
var crypted_text = [] ; 
let object = {
  steps : steps_text,
  crypted_text: crypted_text
};
export function encryptRSA(prime1 ,prime2 ,text,method,key){
 
     prime1 = prime1 || 11 ; 
     prime2 = prime2 || 3 ;   
     key = key || 0 ;
  object.steps = [] ;
  object.crypted_text = [] ;  
      var n = prime1 * prime2 ; 
  object.steps.push(`1- Asal sayılar p ve q ${prime1} ve ${prime2} olarak kabul edildi.`);
      var r =(prime1 - 1)* (prime2 - 1);
  object.steps.push(`2- n = Modulus = p*q.`);
  object.steps.push(`3- n = ${prime1 * prime2} olarak hesaplandı. `);
  object.steps.push(`4- r = FI = (p-1) * (q-1).`);
  object.steps.push(`5- r = ${(prime1-1)*(prime2-1)} olarak hesaplandı.`);
  object.steps.push(`6- Açık Anahtar e ve FI arasında asal olarak seçilmeli.`) ; 
    var e = 7 ; 
    var temp_e = e ;
    var d = 0  ; 
    var i = 0 ; 

    // CALCULATING PRIVATE KEY  WHICH IS d * e = 1 mod (r)
    for ( i = 1 ; 1 ; i++) {
            temp_e += e ;       

          if (temp_e % r == 1 ){
            d = i + 1 ; 
            break;
          }
    };
  object.steps.push(`7- Açık Anahtar e ${e} olarak kabul edildi.`) ;
  object.steps.push(`8- Özel Anahtar d x e = 1 mod (FI) olarak hesaplanır.`) ;
  object.steps.push(`9- Özel Anahtar d = ${d} olarak hesaplandı.`) ;
  object.steps.push(`10- Açık Anahtar = (e,n) . Gizli Anahtar = (d,n)`) ;
  object.steps.push(`10- Açık Anahtar = (${e},${n}) . Gizli Anahtar = (${d},${n})`) ;
  object.steps.push(`11- Şifreli Metin => c = mesaj^e mod n.`) ;

  const letters = text_parser.textParser(text);
console.log("letters which comes rsa scope " , letters);
   for (let i = 0 ; i < text.length ; i++) {
    object.crypted_text[i] = Math.pow(letters[i],e);
    object.crypted_text[i] = object.crypted_text[i] % n ; 
    // 11 => 11^e 
    console.log("crypted[",i,"]", object.crypted_text[i]);
   }
   return object; 
};

export function decryptRSA(){



}




