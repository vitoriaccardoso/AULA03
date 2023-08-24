'use strict'
const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById("media")
const botaoParOuImpar = document.getElementById('parouimpar')
const botaoIntervaloPermitido = document.getElementById('intervalopermitido')
const botaoMaiorque = document.getElementById('maiorque')


function somar (){ 
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2
    resultado.textContent = total
}

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if(numero > 0){
        resultado.textContent = 'POSITIVO'
    }else if (numero < 0){
        resultado.textContent = 'NEGATIVO'
    }else{
        resultado.textContent = 'ZERO'
    }
}


function media(){
    const n1 = Number(document.getElementById('n1').value)
    const n2 = Number(document.getElementById('n2').value)
    const n3 = Number(document.getElementById('n3').value)
    const n4 = Number(document.getElementById('n4').value)


    const ne = Number(document.getElementById('ne').value)
    const resultado = document.getElementById('resultadoMedia')

    const media = (n1 + n2 + n3 + n4) / 4


    if(media >= 7) {
        resultado.textContent = 'APROVADO - Média: ' + media;
    }else{
        const ne = Number (prompt('Digite a nota de exame'))
        const md2 = (media + ne) / 2;

    if (md2 >= 5) {
        resultado.textContent = 'APROVADO EM EXAME - Média após exame: ' + md2;
    } else {
        
        resultado.textContent = 'REPROVADO após exame - Média após exame: ' + md2;
    }
    }
}

function parouimpar(){
    const number1 = Number(document.getElementById('number1').value)
    const resultado = document.getElementById ('resultadoValor')

    if(number1 % 2 === 0){
    resultado.textContent = "NÚMERO PAR"
    }else{
        resultado.textContent = "NÚMERO IMPAR"
    }
}

function intervalopermitido(){
    const num1 = Number(document.getElementById('num1').value)
    const resultado = document.getElementById('resultado1a9')

    if (num1 >=1 && num1 <= 9){
        resultado.textContent = "O VALOR ESTÁ NA FAIXA PERMITIDA"
    }else{
        resultado.textContent = "O VALOR ESTÁ FORA DA fAIXA PERMITIDA"
    }

    }

    function maiorque(){
        const n8 = Number(document.getElementById('n8').value)
        const resultado = document.getElementById('resultadoM')

        if(n8 * 2 >= 30){
        resultado.textContent = "SEU RESULTADO É  " + (n8 * 2)
        }else{
            resultado.textContent = "SEU RESULTADO NÃO ESTÁ NO INTERVALO PERMITIDO"
        }
    }







botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', media)
botaoParOuImpar.addEventListener('click', parouimpar)
botaoIntervaloPermitido.addEventListener('click', intervalopermitido)
botaoMaiorque = document.addEventListener('click', maiorque)