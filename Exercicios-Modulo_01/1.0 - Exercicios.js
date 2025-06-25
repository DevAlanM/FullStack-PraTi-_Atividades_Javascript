const prompt = require('prompt-sync')();

console.log("\n - 1 - Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.\n");

let valor = parseInt(prompt("Informe o valor: "))
valor % 2 === 0 ? console.log("R - Par") : console.log("R - Impar")

console.log("\n - 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.\n");

let idade = parseInt(prompt("Informe sua idade: "));
let faixaEtaria;

switch (true) {
  case (idade >= 0 && idade <= 12):
    faixaEtaria = "criança";
    break;
  case (idade >= 13 && idade <= 17):
    faixaEtaria = "adolescente";
    break;
  case (idade >= 18 && idade <= 50):
    faixaEtaria = "adulto";
    break;
  case (idade > 50):
    faixaEtaria = "idoso";
    break;
  default:
    faixaEtaria = "idade inválida";
}

console.log(`R - Você é ${faixaEtaria}.`);

console.log("\n - 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como 'Aprovado', 'Recuperação', ou 'Reprovado' utilizando if-else if.\n");

let nota = parseInt(prompt("Informe sua nota: "));

if(nota > 6 && nota <= 10)
    console.log('R - Aprovado')
else if(nota <= 6 && nota > 0)
    console.log('R - Recuperação')
else 
    console.log('R - Reprovado')

console.log("\n - 4 . Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.\n");

console.log("1 - Pagar conta de luz\n2 - Reclamação\n3 - Outras Duvidas\n");
const opcao = prompt("Informe o numero de atendimento que deseja: ")

switch (opcao)
{
    case '1':
        console.log("R - Baixe a 2 via do boleto 'aqui'")
        break;
    case '2':
        console.log("R - Aguarde, um atendende irá falar com voce")
        break;
    case '3':
        console.log("R - Entre em contato com o numero (99) 9999-9999")
        break;
    default:
        console.log("R - Opção invalida")
        break;    
}

console.log("\n - 5 . Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.\n");

let peso = parseFloat(prompt("Digite seu peso em kg: "));
let altura = parseFloat(prompt("Digite sua altura em metros: "));

let calculo = peso / (altura * altura);

let imc = parseFloat(calculo.toFixed(2));

if (imc < 18.5) {
  console.log("R - Baixo peso");
} else if (imc >= 18.5 && imc < 25) {
   console.log("R - Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("R - Sobrepeso");
} else {
   console.log("R - Obesidade");
}

console.log("\n - 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. \n Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B \n  Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)\n  Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)\n  Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)\n");

let A = parseFloat(prompt("Digite o valor do lado A: "));
let B = parseFloat(prompt("Digite o valor do lado B: "));
let C = parseFloat(prompt("Digite o valor do lado C: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
      console.log("R - Triângulo Equilátero: todos os lados são iguais.");
    } else if (A === B || A === C || B === C) {
      console.log("R - Triângulo Isósceles: dois lados são iguais.");
    } else {
      console.log("R - Triângulo Escaleno: todos os lados são diferentes.");
    }
} else {
  console.log("R - Os valores informados não formam um triângulo.");
}

console.log("\n - 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.\n");

let valorVarejo = 0.30;
let valorAtacado = 0.25;
let valorTotal;
let qtdMaca = prompt("Digite quantas maçãs voce deseja: ")

if(qtdMaca > 12)
  valorTotal = qtdMaca * valorAtacado
else
  valorTotal = qtdMaca * valorVarejo

console.log(`R - O valor total das maçãs é de R$ ${valorTotal.toFixed(2)}`)

console.log("\n - 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.\n");

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

if (valor1 === valor2) {
    console.log("R - Os valores não podem ser iguais. Tente novamente.");
} else {
    if (valor1 < valor2) {
      console.log("R - Ordem crescente: " + valor1 + ", " + valor2);
    } else {
      console.log("R - Ordem crescente: " + valor2 + ", " + valor1);
    }
}

console.log("\n - 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.\n");

for(let contador = 10; contador >= 1; contador--){
  console.log(contador)
}

console.log("\n - 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.\n");

let num = parseInt(prompt("Digite um numero: "));

for (let count = 1; count <= 10; count++){
  console.log(count + " - " + num);
}

console.log("\n - 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.\n");

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt("Digite o " + i + "º número: "));
    soma += numero;
}

console.log("R - A soma total dos números é: " + soma);

console.log("\n - 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.\n");

let number = parseInt(prompt('Qual o numero que você quer saber da tabuada? '))

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}

console.log("\n - 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.\n");

let resposta = null
soma = 0
contadora = 0

while(resposta != 0){
    resposta = Number(prompt('Informe as medias: (Para calcular a média final digite 0): '))
    
    soma += resposta
    contadora++
}

let mediaFinal = soma/(contadora-1)
console.log(`R - A média final é: ${mediaFinal}`)

console.log("\n - 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.\n");

let numero = parseInt(prompt("Digite um número inteiro não negativo: "));

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro válido e não negativo.");
} else {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log("R - O fatorial de " + numero + " é: " + fatorial);
}

console.log("\n - 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.\n");

let a = 0, b = 1;

console.log("Sequência de Fibonacci: ");

for (let i = 0; i < 10; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}