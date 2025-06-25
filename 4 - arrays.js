// let listaFrutas = Array()
// let listaNomes = ['Alan','Vitoria']

// listaFrutas[0] = 10
// listaFrutas[1] = 'morango'
// listaFrutas['adocicadas'] = 'pera'

// for(let i = 0; i < listaFrutas.length; i++){
//     console.log(listaFrutas[i])
// }

// listaFrutas.push('melancia') // Add no final
// listaFrutas.unshift('laranja') // Add no comeco

// listaFrutas.pop() // Remove no final
// listaFrutas.shift() // Remove no comeco

// console.table(listaFrutas)

//1 - Atividade Aula de arrays
let listaNumeros = [1, 20, 10, 14, 16, 5, 7, 3, 9, 2, 19];

//1.1 - Sem usar os metodos do Array

let somaNumeros = 0;
let numerosPares = Array();

for(let i = 0; i < listaNumeros.length; i++){
    somaNumeros += listaNumeros[i]
    
    if(listaNumeros[i] % 2 === 0)
        numerosPares.push(listaNumeros[i])
}

let mediaNumeros = somaNumeros / listaNumeros.length

console.log('O array original é: ' + listaNumeros)
console.log('A soma é: ' + somaNumeros)
console.log('A média é: ' + mediaNumeros.toFixed(2))
console.log('Os numeros pares são: ' + numerosPares)

//1.2 - Usando os metodos do Array
let soma = listaNumeros.reduce((acumulador, valor) => acumulador + valor, 0)
let pares = listaNumeros.filter((num => num % 2 === 0))
let media = soma / listaNumeros.length

console.log('O array original é: ' + listaNumeros)
console.log('A soma é: ' + soma)
console.log('A média é: ' + media.toFixed(2))
console.log('Os numeros pares são: ' + pares)

// Orderne o array listaNumeros em ordem crescente

let n = listaNumeros.length;

for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i; j++) {
        if(listaNumeros[j] > listaNumeros[j + 1]){
            let temp = listaNumeros[j]
            listaNumeros[j] = listaNumeros[j + 1]
            listaNumeros[j + 1] = temp
        }
    }
}

console.log(listaNumeros)

// Usando o Metodo Sort
console.log(listaNumeros.sort((a, b) => a - b))


// Matriz - Arrays Multidimensoes
let matriz = []
let somaMatriz = 0

for(let i = 0; i < 3; i++){
    matriz[i] = []

    for(let j = 0; j < 3; j++){
        
        matriz[i][j] = 10

        if(i == j)
            somaMatriz += matriz[i][j]
    }
}

console.table(matriz)

// Calcular a diagonal dessa matriz
console.log(somaMatriz)
