let $ = document.querySelector.bind(document)

let botaoBuscar = $('#buscar-paciente');

botaoBuscar.addEventListener("click", function(event){
    event.preventDefault();
    console.log('buscando');

    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){ 

        if (xhr.status == 200){

        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);

        pacientes.forEach( function(paciente){
            adicionaPacienteNaTabela(paciente)});
        
        alert('tabela preenchida');

        }else{
            alert("url não encontrado");
        }
        
    });

    xhr.send();

   

});