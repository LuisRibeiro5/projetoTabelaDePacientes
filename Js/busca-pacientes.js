var buscarPacientes = document.querySelector("#buscar-pacientes")

buscarPacientes.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://my-json-server.typicode.com/LuisRibeiro5/pacientes/patients")
    xhr.send()
    xhr.addEventListener("load", function(){
        var erro = document.querySelector("#erro-busca")
        
        if(xhr.status == 200){
            erro.classList.add("invisivel")
            var resposta = xhr.responseText

            var pacientes = JSON.parse(resposta)
            
            pacientes.forEach(function (paciente){
                adicionaPaciente(paciente)
            })
                calculaImc() 
        }else {
            erro.classList.remove("invisivel")
            erro.classList.add("mensagem-erro")
            erro.textContent += ` erro: ${xhr.status}`
        }
        
    })
})