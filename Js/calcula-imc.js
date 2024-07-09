var titulo = document.querySelector(".titulo");
titulo.textContent = `Aparecida Nutrição`;
calculaImc()

function ValidaPeso(peso){
    if(peso > 0 && peso < 300) return true
}

function ValidaAltura(altura){
    if(altura > 0.3 && altura < 3) return true
}

function calculaimc(peso,altura){
    var imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}

function calculaImc(){
    var listapaciente = document.querySelectorAll(".paciente");
for (let i = 0; i < listapaciente.length; i++) {

    var pacientes = listapaciente[i]

    var peso = pacientes.querySelector(".info-peso").textContent;
    var altura = pacientes.querySelector(".info-altura").textContent;

    var pesoEhValido = ValidaPeso(peso) 
    var alturaEhValida = ValidaAltura(altura)

    var imc = pacientes.querySelector(".info-imc");

    if (!pesoEhValido) {
        imc.textContent = `Peso invalido \n`;
        pesoEhValido = false;
        pacientes.classList.add("paciente-invalido")
    }
    if (!alturaEhValida) {
        imc.textContent += `Altura invalida`;
        alturaEhValida = false;
        pacientes.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        imc.textContent = calculaimc(peso,altura)

    }
}
}