function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value) 
    }

    return paciente
}

function validaFormulario(paciente){
    var erros = new Array()
    if(paciente.nome === "") {erros.push("Preencha o nome. \n")}
    else if(paciente.nome.length < 4) erros.push("Nome invalido. \n")
    if(paciente.peso === "") {erros.push("Preencha o peso. \n")}
    else if(!ValidaPeso(paciente.peso)) erros.push("Peso deve estar entre 0 e 400. \n")
    if(paciente.altura === "") {erros.push("Preencha a altura. \n")}
    else if(!ValidaAltura(paciente.altura)) erros.push("Altura deve estar entre 0 e 3. \n")
    if(paciente.gordura === "") {erros.push("Preencha o campo gordura. \n")}
    else if(isNaN(paciente.gordura)) erros.push("Gordura inválida")
    
    return erros
}

function mensagemErro(erros){
    var ul = document.querySelector(".mensagem-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });

    return ul
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function adicionaPaciente(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}