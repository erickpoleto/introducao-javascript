var pacientes = document.querySelectorAll(".paciente");
var titulo = document.querySelector(".titulo");


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imc = paciente.querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("peso invalido");
        imc.textContent = "peso invalido";
        paciente.classList.add("paciente-invalido");

    } else if (!alturaEhValida) {
        console.log("altura invalida");
        imc.textContent = "altura invalida";
        paciente.style.backgroundColor = "red";
    } else {
        imc.textContent = calculo_imc(peso,altura);
    }
}

function calculo_imc(peso, altura){
    
    var imc = 0;
    
    imc = (peso / (altura * altura));
    
    return imc.toFixed(2);
}


function validaPeso(peso){
    
    if(peso >= 0 && peso < 1000){
        
        return true;
        
    } else{
        
        return false;
    }
}
function validaAltura(altura){
    
    if(altura > 0 && altura < 3){
        
        return true;
        
    } else{
        
        return false;
    }
}






/*funçao anonima*/
/*
titulo.addEventListener("click", function(){
    console.log("oi, cliquei"); 
});

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("fui clicado");
}
Função escrita
*/ 


