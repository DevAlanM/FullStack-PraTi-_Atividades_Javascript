// let isso = 11
// console.log(isso)

//1
let number = 6

number % 2 === 0 ? console.log("Par") : console.log("Impar")

//2
let number1 = 6, number2 = 9, number3 = 10

if ((number1 > number2) && (number > number3))
    console.log("firstNumber")
else if ((number2 > number1) && (number2 > number3))
    console.log("secondNumber")
else if ((number3 > number1) && (number3 > number2))
    console.log("thirdNumber")
else 
    console.log("sameNumber")

//3
const prompt = require('prompt-sync')();

console.log ("Press Number Key to operationMath: ")
console.log("1 - Sum\n2 - Subtract\n3 - Multiply\n4 - Divide");

const operationMath = prompt("Enter operation number: ");

const value1 = parseFloat(prompt("First Number: "));
const value2 =  parseFloat(prompt("Second Number: "));

let result

switch(operationMath){
    case "1":
        result = value1 + value2
    break
    case "2":
        result = value1 - value2
    break
    case "3":
        result = value1 * value2
    break
    case "4":
        result = value1 / value2
    break
    default:
     console.log("Invalid Option")
     break
}

if (result !== undefined)
    console.log(`The result of the operation is ${result}`);

// Exercicio 2: Verificar se um numero é positivo, negativo ou zero

let num = -10;

if (num < 0)
console.log("Negative Value")

else if (num === 0)
    console.log("Value is Zero")

else if (num > 0)
    console.log("Positive Value")

else
    console.log("Invalid Value")

// Exercicio 2: Verificar é um ano bissexto
  let ano = 2024;
  
  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é um ano bissexto.`);
  } 
  else {
    console.log(`${ano} não é um ano bissexto.`);
  }

// Exercicio 2: Defina faixas etarias para crianças, adolecentes e adultos e com o switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária]

let idade = parseInt(prompt("Informe sua idade:"));
let faixaEtaria;

switch (true) {
  case (idade >= 0 && idade <= 12):
    faixaEtaria = "criança";
    break;
  case (idade >= 13 && idade <= 17):
    faixaEtaria = "adolescente";
    break;
  case (idade >= 18):
    faixaEtaria = "adulto";
    break;
  default:
    faixaEtaria = "idade inválida";
}

console.log(`Você é ${faixaEtaria}.`);