function calcular(){
    var vnuma = document.getElementById("numa").value;
    var vnumb = document.getElementById("numb").value;
    var salida = document.getElementById("salida");
    var suma = parseInt(vnuma) + parseInt(vnumb);
    if(vnuma==10 || vnumb==10 || suma==10){
        salida.innerHTML="1";
            }
    
        else{
        salida.innerHTML="0";
        }
    }
