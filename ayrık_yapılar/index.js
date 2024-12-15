// DISCRETE MATH PROJECT BY GORKEM MERT , MEHMED ZAHID KAYA 
// CRYPTOGRAPY TOOL FOR VISUALIZING ENCRYPT ALGORITHMS (RSA,DIFFIE-HELMAN,VIEGENERE)
// 
import * as util from './util.js';
import * as RSA from './rsa_algorithm.js';


 var RsaBackUp = document.getElementById("main_column_1").innerHTML;
 var method = "encrypt";
 var algorithm_type = document.getElementById("algorithms").value;

// METHOD SWAPPER
      document.getElementById("selected_method").addEventListener("click", () =>  {
          method = util.method_swapper();
      });
// ALGORITHM SWAPPER 
      document.getElementById('algorithms').addEventListener('change', () => {
        algorithm_type = document.getElementById("algorithms").value;
        console.log(algorithm_type);
        util.algorithm_swapper(algorithm_type,RsaBackUp);
      });
//Algorithm Calculator
  document.getElementById("calculate").addEventListener("click", () => {

    const prime1 = document.getElementById("asal1").value;
    const prime2 = document.getElementById("asal2").value;
    const text = document.getElementById("input_box").value;
    RSA.calculateRSA(prime1,prime2,text,method);
  })

                  
  
