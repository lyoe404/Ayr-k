// DISCRETE MATH PROJECT BY GORKEM MERT , MEHMED ZAHID KAYA 
// CRYPTOGRAPY TOOL FOR VISUALIZING ENCRYPT ALGORITHMS (RSA,DIFFIE-HELMAN,VIEGENERE)
// 
import * as algorithm_swapper from "./swappers_routers/algorithm_swapper.js"
import * as algorithm_router from "./swappers_routers/algorithm_router.js"
import * as method_swapper from "./swappers_routers/method_swapper.js"

 var RsaBackUp = document.getElementById("main_column_1").innerHTML;
 var method = "encrypt";
 var algorithm_type = document.getElementById("algorithms").value;

// METHOD SWAPPER
      document.getElementById("selected_method").addEventListener("click", () =>  {
          method = method_swapper.method_swapper();
          algorithm_swapper.algorithm_swapper(algorithm_type,RsaBackUp,method);
      });
// ALGORITHM SWAPPER 
      document.getElementById('algorithms').addEventListener('change', () => {
        algorithm_type = document.getElementById("algorithms").value;
        console.log(algorithm_type);
        algorithm_swapper.algorithm_swapper(algorithm_type,RsaBackUp,method);
      });




      //Algorithm Calculator
document.getElementById("calculate").addEventListener("click", () => {

    const prime1 = document.getElementById("asal1").value;
    const prime2 = document.getElementById("asal2").value;
    const text = document.getElementById("input_box").value;
    const output_area = document.getElementById("output_text");
    output_area.innerHTML = "Şifreli Mesaj : " ; 
    const steps_area = document.getElementById("steps_area");
    steps_area.innerHTML = "" ; 

  // RSA DECRYPT ALGORITHM STEP ADDER
    algorithm_router.algorithmRouter(prime1,prime2,method,algorithm_type,text)        
  


  });

                  
  