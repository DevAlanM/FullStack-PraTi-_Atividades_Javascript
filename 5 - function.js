function RetornaParOuImpar(valor){
    let resultado

    if(valor % 2 === 0){
        resultado = 'PAR'
    } else {
        resultado = 'IMPAR'
    }

    return resultado
}

let numero = 10

console.log(RetornaParOuImpar(numero))

//

function calculaArea(altura, largura)
{
    return altura * largura
}

console.log(calculaArea(10, 10))

// Faca uma funçao que retorna um array ordenado

function arrayOrdenado(array){
    return array.sort((a, b) => a - b)
}

console.log(arrayOrdenado([1,3,2,10,7]))

//---------------------------------------------
//funcao anonima
let exibeNome = function(nome){
    console.log(nome)
}

// callback arrow function
let exibeNome1 = (nome) => console.log(nome)

exibeNome1('Alan')

// Criar uma função que soma os elementos de um array e retorna esse valor

function somaArray(arr){
    let soma = 0

    for(let i = 0; i < arr.length; i++){
        soma += arr[i]
    }

    return soma
}

console.log(somaArray([1,2,3,4,5]))

// Criar uma função que retorna o maior número em um array

function maiorValor(arr)
{
    let maior = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > maior){
            maior = arr[i]
        }
    }

    console.log(maior)
}

maiorValor([1,100,-3,2,0])

// Funções nativas Javascript

let nome = 'Alan Martins'

console.log(nome.length)
console.log(nome.charAt(0)) //pegar a primeira letra
console.log(nome.indexOf('n')) // localizar a letra informada no nome

console.log(nome.replace('Alan', 'Julio'))
console.log(nome.substr(5, 7)) // coletar da posição 5 até mais 7 caracteres posteriores pegar so o martins
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

console.log("   Alan".trim())

// Faça uma função que inverta uma string.
// Primeira forma
function reverterString(palavra){
    let revertida = ''

    for(let i = palavra.length - 1; i >=0; i--){
        revertida += palavra[i]
    }

    return revertida
}

console.log(reverterString("Olá Mundo"))


// Outra forma
function reverterString2(palavra){
    return palavra.split('').reverse().join('')
}

console.log(reverterString2("Olá Mundo !!"))

// Encontre o número de vogais de uma String
function contarVogais(palavra){
    let vogais = palavra.match(/[aeiou]/gi)

    return vogais ? vogais.length : 0
}

console.log(contarVogais("Dragon Age"))

console.log(Math.ceil(100.2)) // Arredondar valores para cima
console.log(Math.floor(100.2)) // Arredondar valores para baixo
console.log(Math.round(100.2)) // Arredondar pro inteiro mais proximo

console.log(Math.sqrt(81)) // Raiz Quadrada
console.log(Math.cbrt(81)) // Raiz Cubica
console.log(Math.pow(9, 2)) // Potencia


console.log(Math.abs(100.2)) // Numero absoluto
console.log(Math.random()) // Numero aleatorio entre 0 e 1
console.log(Math.random() * 100) // Numero aleatorio entre 0 e 100

//Gerar um número aleatorio entre dois valores

function randomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomBetween(1,3))


let date = new Date()
console.log(date.getDate()) // Pega o dia
console.log(date.getMonth() + 1) // Pega o mes atual
console.log(date.getFullYear()) // Pega o Ano
console.log(date.toString()) // Pega tudo


let date1 = new Date(2015,7,7)
let date2 = new Date(2025,7,7)


console.log(date1.getTime())
console.log(date2.getTime())

let milisegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime())
let milisegundosPorDias = (1 * 24 * 60 * 60 * 1000)

console.log(`A diferenca entre as datas é de: ${milisegundosEntreDatas/milisegundosPorDias}`)

// Formatar uma Data.
function formatDate(date){
    let day = date.getDate().toString().padStart(2, '0') // padStart precisa ter 2 casas e implementa o 0 antes do numero caso nao informado 17/6/2025 => 17/06/2025
    let month = (date.getMonth() + 1).toString().padStart(2, '0')
    let year = date.getFullYear().toString()

    return `${day}/${month}/${year}`
}

console.log(formatDate(date1))

// A soma de duas matrizes.



//Faca uma função que calcula o fatorial de um numero - 5 = 1x2x3x4x5 = 120

function fatorial(numero){
    let fatorial = 1

    for(let i = 1; 1 <= numero; i++){
        fatorial *= i
    }

    console.log(fatorial)
}

fatorial(5);

// Imprima os primeiros 10 numeros da sequencia de Fibonacci

let a = 0, b = 1;

console.log("Sequência de Fibonacci: ");

for (let i = 0; i < 10; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}

//Faca um Função de PA - Progressao Aritmetica
function pa(primeiroTermo, razao){
    let soma = 0

    for(let i = 0; i < 10; i++){
        let termo = primeiroTermo + i * razao
        console.log(termo)
        soma += termo
    }

    console.log(`A soma dos termos é ${soma}`)
}

console.log(pa(1,3))