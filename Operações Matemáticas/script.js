//Função de redirecionar
function redirect(url) {
    window.location = url;
}

//Função de dobrar um número
function dobrar() {
    let num = document.getElementById("aSerDobrado");
    let resposta = document.getElementById("exit1");

    let final = (num.value * 2);

    resposta.innerHTML = `O número multiplicado por dois é igual a ${final}`;
}

//Função da média de dois números
function media() {
    let num1 = document.getElementById("media1");
    let num2 = document.getElementById("media2");
    let saida = document.getElementById("exit2");

    let media = (Number(num1.value) + Number(num2.value)) / 2;

    saida.innerHTML = `A média dos dois números é igual a ${media}`;
}

//Funçãode quantidade de horas de uma viagem
function qDias() {
    let dias = document.getElementById("dias1");
    let saida = document.getElementById("exit3");

    let horas = dias.value * 24;

    saida.innerHTML = `A viagem em horas durou ${horas} horas`
}

//Função de horas vividas
function horasVividas() {
    let ano = document.getElementById("anoNascimento");
    let saida = document.getElementById("exit4");
    let dias = document.getElementById("diaNascimento").value;
    ano = 2022 - ano.value;
    let mes = document.getElementById("mesNascimento");
    let idade = (ano * 365) - (mes.value * 30) - dias;
    idade = idade * 24;
    saida.innerHTML = `Sua quantidade de horas vividas é ${idade}`;
}

//Função da conta de restaurante
function contaRestaurante() {
    let conta = document.getElementById("valorContaR");
    conta = conta.value;
    let saida = document.getElementById("exit5");

    conta = Number(conta) + ((conta * 10) / 100);
    
    saida.innerHTML = `A conta mais os 10% é igual a ${conta}`;
}

//Função IMC 
function imc() {
    let altura = document.getElementById("alturaIMC").value;
    let peso = document.getElementById("pesoIMC").value;
    let saida = document.getElementById("exit6");

    let imc = (peso / (altura ** 2));
    imc = imc.toFixed(1);

    if(imc < 20.7) {
        saida.innerHTML = `O seu IMC é ${imc} e você está abaixo do peso.`;
    }
    else if(20.7 < imc && imc < 26.4) {
        saida.innerHTML = `O seu IMC é ${imc} e você está com o peso ideal.`;
    }
    else if(26.5 < imc && imc < 27.8) {
        saida.innerHTML = `O seu IMC é ${imc} e você está um pouco acima do peso.`;
    }
    else if(27.9 < imc && imc < 31.1) {
        saida.innerHTML = `O seu IMC é ${imc} e você está acima do peso.`;
    }
    else {
        saida.innerHTML = `O seu IMC é ${imc} e você está obeso.`;
    }
}

//Função do número antecessor
function antecessor() {
    let num = document.getElementById("numAntecessor").value;
    let saida = document.getElementById("exit7");

    num = num - 1;

    saida.innerHTML = `O antecessor do número é igual a ${num}`;
}

//Função de multiplicador de vetores
function vetores() {
    let multi = document.getElementById('multiplicador').value;
    let input = document.getElementsByName('array[]');
    let array = [];

    for(let i = 0; i < input.length; i++) {
        let element = input[i].value;
        element = element * multi;
        array.push(element);
        document.getElementById("exit7").innerHTML += array[i] + " ";
    }
}

//Função da área do triangulo
function areaTri() {
    let base = document.getElementById("baseTri").value;
    let altura = document.getElementById("alturaTri").value;
    let saida = document.getElementById("exit8");

    area = base * altura;

    saida.innerHTML = `A área do triangulo é igual a ${area}`;
}

//Função de idade em dias
function idadeDias() {
    let idade = document.getElementById("idadeAnos").value;
    saida = document.getElementById("exit9");

    idade = idade * 365;

    saida.innerHTML = `Sua idade em dias é igual a ${idade}`;
}

//Função de percentual de votos
function percentualE() {
    let total = document.getElementById("totalEleitores").value;
    let brancos = document.getElementById("votosBrancos").value;
    let nulos = document.getElementById("votosNulos").value;
    let validos = document.getElementById("votosValidos").value;
    let saida = document.getElementById("exit10");
    let saida2 = document.getElementById("exit11");
    let saida3 = document.getElementById("exit12");
    let saida4 = document.getElementById("exit13");

    brancos = (total * brancos) / 100;
    nulos = (total * nulos) / 100;
    validos = (total * validos) / 100;
    
    saida.innerHTML = `O total de votos é igual a ${total}`;
    saida2.innerHTML = `O percentual de votos brancos é igual a ${brancos}%`;
    saida3.innerHTML = `O percentual de votos nulos é igual a ${nulos}%`;
    saida4.innerHTML = `O percentual de votos válidos é igual a ${validos}%`;
}

//Função de reajuste
function reajuste() {
    let salario = document.getElementById("salarioA").value;
    let ajuste = document.getElementById("ajustee").value;
    
    ajuste = Number((salario * ajuste) / 100);
    salario = Number(salario) + ajuste;
    
    document.getElementById("exit14").innerHTML = `O salário depois do reajuste é igual a ${salario}`;
}

//Função de custo de carro
function custoCarro() {
    let precoBruto = document.getElementById("preçoCarroB").value;
    let distri = Number((precoBruto * 28) / 100);
    let imposto = Number((precoBruto * 45) / 100);
    
    let precoF = Number(precoBruto) + imposto + distri;
    
    document.getElementById("exit15").innerHTML = `O preço final do carro é ${precoF}`;
}

//Função impar ou par
function imparOuPar() {
    let num = document.getElementById("parImpar").value;
    
        if(num % 2 == 0) {
           document.getElementById("exit16").innerHTML = `O número ${num} é par`;
        }
        else {
           document.getElementById("exit16").innerHTML = `O número ${num} é impar`;
        }
}

//Função do valor maior ou menor que cem
function valorCem() {
    let num = document.getElementById("numeroCem").value;

    if(num > 100) {
        document.getElementById("exit17").innerHTML = `O número é maior que cem. ${num}`;
    }
    else if(num <= 100) {
        document.getElementById("exit17").innerHTML = `O número é menor que cem. 0`;
    }
}

//Função de peso ideal
function pesoIdeal() {
    let altura = document.getElementById("alturaID").value;
    let sexo = document.getElementsByName("sexo");
    let masculino = document.getElementById("masculino").value;
    let feminino = document.getElementById("feminino").value;

    if(sexo[0].checked == true) {
        let pesoI = (72.7 * altura) - 58;
        document.getElementById("exit18").innerHTML = `O seu peso ideal é ${pesoI.toFixed(2)}`;
    }
    else if(sexo[1].checked == true) {
        let pesoI = (62.1 * altura) - 44.7;
        document.getElementById("exit18").innerHTML = `O seu peso ideal é ${pesoI.toFixed(2)}`;
    }
}