const prompt = require('prompt-sync')();

// Ler Graus Celsius e devolva em Fahrenheit

let celsius = Number(prompt('Informe a temperatura em graus celsius: '))

let fahrenheit = (celsius * 9/5) + 32

console.log('A temperatura em Fahrenheit é: ', fahrenheit )

// Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relaao ao total de eleitores.

let eleitor = Number(prompt('Informe o número de eleitores: '))

let votosBranco = Number(prompt('Informe o número de votos em branco: '))
let votosNulos = Number(prompt('Informe o número de votos nulos: '))
let votosValidos = Number(prompt('Informe o número de votos válidos: '))

console.log('A porcentagem em votos brancos é: ', (votosBranco / eleitor * 100) )
console.log('A porcentagem em votos nulos é: ', (votosNulos / eleitor * 100) )
console.log('A porcentagem em votos validos é: ', (votosValidos / eleitor * 100) )

//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

let turmaC = 60
let turmaD = 20

let reprovadosTurmaC = Number(prompt('Informe o número de Reprovados na Turma C: '))
let AprovadosTurmaD = Number(prompt('Informe o número de Aprovados na Turma D: '))

let qtdReprovadosC = (turmaC * reprovadosTurmaC) / 100
let qtdReprovadosD = ((100 - AprovadosTurmaD) * turmaD) / 100

console.log('A - A quantidade de alunos reprovados da turma C é: ', qtdReprovadosC )
console.log('B - A quantidade de alunos reprovados da turma D é: ', qtdReprovadosD )

let totalDeAlunos = turmaC + turmaD
let totalDeReprovados = qtdReprovadosC + qtdReprovadosD

let percentualReprovados = (totalDeReprovados / totalDeAlunos) * 100

console.log('C - A porcentagem de reprovados das turmas é: ', percentualReprovados.toFixed(2), '%')

//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.
let day = prompt('Escreva o dia da semana: ')

if( day === "Sabado" || day === "Domingo")
  console.log('É Final de Semana')
else
  console.log('É dia útil')

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.
let numero;

do {
  numero = Number(prompt('Digite um número (0 para sair):'));

  if (numero > 0) {
    console.log('Positivo');
  } else if (numero < 0) {
    console.log('Negativo');
  }

} while (numero !== 0);

//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.
const senhaCorreta = 2807;
let senha;

do {
  senha = Number(prompt('Digite a senha:'));

  if (senha !== senhaCorreta) {
    console.log('Senha Inválida');
  }
} while (senha !== senhaCorreta);

console.log('Acesso Permitido');