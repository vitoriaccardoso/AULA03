'use strict'
const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')


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
    const resultado = document.getElementById('resultado-media')

    const total = (n1 + n2 + n3 + n4) / 4
    resultado.textContent = total


    if(total >= 7) {

        resultado.textContent = 'APROVADO'
    }else if(total < 7){
        resultado.textContent = 'NEGATIVO'
    }
    }

    function impar_ou_par(){
        const num1 = Number(document.getElementById('num1').value)
        const num2 = Number(document.getElementById('num2').value)



    }





botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)
botaoMedia.addEventListener('click', impar_ou_par)