var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacForm(form);
    
    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
   
    
    form.reset();
    
    var mensagemErro = document.querySelector(".mensagems-erro");
    mensagemErro.innerHTML = "";
    
});

/*functions*/

function adicionaPacienteNaTabela(paciente){

    var pacienteTr = criaTr(paciente);
    var tbody = document.querySelector("#tabela-pacientes");
    tbody.appendChild(pacienteTr);
}


function obtemPacForm(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculo_imc(form.peso.value, form.altura.value)
        
    }
    return paciente;
}


function criaTr(paciente){
    
    var pacienteTr = document.createElement("tr");
    
    pacienteTr.classList.add("paciente");
    
    var nomeTd = criaTd(paciente.nome, "info-nome");
    var pesoTd = criaTd(paciente.peso, "info-peso");
    var alturaTd = criaTd(paciente.altura, "info-altura");
    var gorduraTd = criaTd(paciente.gordura, "info-gordura");
    var imcTd = criaTd(paciente.imc, "info-imc");
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
    
}

function criaTd(dado, classe){
    
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
    
}

function validaPaciente(paciente){
    
    var erros = [];
    
    if(paciente.nome.length == 0){
        erros.push("o nome não pode ser em branco");
    }
    
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalido");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("peso é invalido");
    }
    if(paciente.gordura.length == 0){
        erros.push("gordura não pode ser em branco");
    }
    
    if(paciente.peso.length == 0){
        erros.push("o peso não pode ser em branco");
        
    }
    if(paciente.altura.length == 0){
        erros.push("a altura não pode ser em branco");
        
    }
    
    return erros;
    
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector(".mensagems-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
    
}