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
    const output_area = document.getElementById("output_text");
    output_area.innerHTML = "Şifreli Mesaj : " ; 
    const steps_area = document.getElementById("steps_area");
    steps_area.innerHTML = "" ; 
    // RSA ENCRYPT ALGORITHM STEP ADDER
    if (algorithm_type == "RSA" && method == "encrypt"){
      let result_object = util.algorithmRouter(prime1,prime2,method,algorithm_type,text);
    for (let i = 0 ; i < result_object.steps.length ; i++) {

      let step = document.createElement('div');
      step.className = "steps";
      step.innerHTML = result_object.steps[i];
      steps_area.appendChild(step);
    } 
    for (let i = 0 ; i < result_object.crypted_text.length ; i++) {
      output_area.innerHTML += result_object.crypted_text[i];
      if (i< result_object.crypted_text.length - 1 )output_area.innerHTML += "-";
    }
  }
  // RSA DECRYPT ALGORITHM STEP ADDER
  if (algorithm_type == "RSA" && method == "decrypt") {
    util.algorithmRouter(prime1,prime2,method,algorithm_type,text)
          

  }


  });

                  
  
