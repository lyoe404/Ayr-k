import * as step_engine from "../util/step_output_adder.js";
import * as RSA from "../algorithms/rsa_algorithm.js";
import * as output_parser from "../util/output_parser.js";

// ALGORITHM ROUTER
export function algorithmRouter(prime1, prime2,method, algorithm,text){

  if (algorithm == "RSA") {
      if (method == "encrypt") {
         step_engine.step_output_Adder(RSA.encryptRSA(prime1,prime2,text,method)) ;

        }
   
      if (method == "decrypt"){
        console.log("geldirsa");
        console.log(output_parser.outputparserRSA(text));

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