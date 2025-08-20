const prompt = require('prompt-sync')()

// Tabuada

let number = Number(prompt('Qual o numero que você quer saber da tabuada? '))
let count = 1

while(count <= 10) {
    console.log(`${number} x ${count} =  ${number * count}`)

    count++
}

// Contagem regressiva
let contador = 10

while(contador >= 0) {
    console.log(contador)
    contador--
}

// Usando o for

for(contador = 0; contador <= 10; contador++){
    console.log(contador)
}

// faca a media aritmetica

let resposta = null
let soma = 0
let contadora = 0

while(resposta != 0){
    resposta = Number(prompt('Informe as medias: (Para calcular a média final digite 0): '))
    
    soma += resposta
    contadora++
}

let mediaFinal = soma/(contadora-1)
console.log(`A média final é: ${mediaFinal}`)