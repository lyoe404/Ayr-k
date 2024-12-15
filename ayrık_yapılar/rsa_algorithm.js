import * as util from './util.js';

export function calculateRSA(prime1,prime2,text,method){
  console.log("geldi");
  if (method == "encrypt"){
  var prime1 = 11 ;
  var prime2 = 3 ; 
  var n = prime1 * prime2 ; 
  var r =(prime1 - 1)* (prime2 - 1);
  var e = 3 ; 
  var d = (1/e) % r ;
  const letters = util.textParser(text);
console.log(letters);
   var cryptedArray = [];
  cryptedArray[0] = Math.pow(letters[0],e);
  cryptedArray[0] = cryptedArray % n ; 
  console.log("crypted[0]",cryptedArray[0]);
  }
  else if (method == "decrypt"){}
};
 


