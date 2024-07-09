var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#novo-paciente");
    var paciente = obtemPacienteDoFormulario(form)
    
    var erros = validaFormulario(paciente)
    if(erros.length > 0){
        return mensagemErro(erros)
    }
       var divErro = document.querySelector(".mensagem-erro")
       divErro.innerHTML = ''

    adicionaPaciente(paciente)

    form.reset()
});

