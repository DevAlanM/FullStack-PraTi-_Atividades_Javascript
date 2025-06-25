const prompt = require('prompt-sync')()

console.log("1 - Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28;31 dias, ano bissexto para fevereiro) e false caso contrário. \n")
function ehDataValida(dia, mes, ano) {
  if (ano < 0 || mes < 1 || mes > 12 || dia < 1) return false;

  const diasPorMes = [31, (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return dia <= diasPorMes[mes - 1];
}

console.log("R: ", ehDataValida(29, 2, 2020));
console.log("R: ", ehDataValida(31, 4, 2023)); 

console.log("\n 2 - Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. \n")

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let palpite;

while (palpite != numeroSecreto) {
  palpite = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
  tentativas++;

  if (palpite < numeroSecreto) {
    console.log("R: Mais alto!");
  } else if (palpite > numeroSecreto) {
    console.log("R: Mais baixo!");
  } else {
    console.log(`R: Parabéns! Acertou em ${tentativas} tentativas.`);
  }
}
console.log("\n 3 - Dada uma string (ex.: 'olá olá mundo mundo'), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. \n ")
function palavrasUnicas(texto) {
  const palavras = texto.split(" ");
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let repetida = false;

    for (let j = 0; j < palavras.length; j++) {
      if (palavras[i] === palavras[j] && i !== j) {
        repetida = true;
        break;
      }
    }

    if (!repetida) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}

console.log("R:", palavrasUnicas("olá olá mundo mundo ola"));

console.log("\n 4 - Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1. \n")

function fatorial(n) {
  if (n < 0) throw new Error("Fatorial não definido para números negativos");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

console.log("R:", fatorial(10));

console.log("\n 5 - Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo. \n")

function debounce(fn, delay){
    let timer = null

    return function(...args){
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
    },  delay);
    }
}

function sayHello() {
  console.log("\n R Debounce: Hello World! com debounce depois de um tempo");
}

const sayHelloDebounce = debounce(sayHello, 1000);

sayHelloDebounce();
sayHelloDebounce();
sayHelloDebounce(); // Só essa vai realmente executar após 1s


console.log("\n 6 - Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. \n")
function memoize(fn){
    const cache = new Map()
    return function(... args){
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

function fibonacci(n){
    if(n < 2) return n
    return fibonacci(n-1) + fibonacci(n -2)
}

const fastFib = memoize(function fibonacci(n){
    if(n < 2) return n
    return fastFib(n - 1) + fastFib(n - 2)
})

console.log("R: "+ fibonacci(40))
console.log("R Recursivo: " + fastFib(40))

console.log("\n 7 - Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. \n")

function nomesOrdenadosPorPreco(produtos){
    let copia = produtos.slice()
    copia.sort((a,b) => a.preco - b.preco)

    let nomes = copia.map(prod => prod.nome)

    return nomes
}

let produtos = [
    {
        nome: "Celular",
        preco: 15
    },
    {
        nome: "Cardeneta",
        preco: 12
    },
     {
        nome: "Notebook",
        preco: 1
    },
     {
        nome: "DVD",
        preco: 0.50
    }
]

console.log("R: ", nomesOrdenadosPorPreco(produtos).join(","));

console.log("\n 8 - Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. \n")

const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 50 },
  { cliente: "Maria", total: 300 }
];

const totaisPorCliente = vendas.reduce((acc, venda) => {
  acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
  return acc;
}, {});

console.log("R: ", JSON.stringify(totaisPorCliente));

console.log("\n 9 - Escreva duas funções: \n")

function paresParaObjeto(pares) {
    return pares.reduce((objeto, [chave, valor]) => {
        objeto[chave] = valor;
        return objeto;
    }, {});
}

function objetoParaPares(objeto) {
    return Object.entries(objeto);
}

const pares = [["nome", "Alan"], ["idade", 30]];

console.log("9.1 - paresParaObjeto(pares) recebe um array de pares [ [chave,valor], ... ] e retorna o objeto equivalente.")

const objeto = paresParaObjeto(pares);
console.log("R: Pares para Objetos:", JSON.stringify(objeto));

console.log("\n 9.2 - objetoParaPares(obj) faz o inverso, retornando um array de pares.")

const novosPares = objetoParaPares(objeto);
console.log("R: Objetos para Pares:", novosPares.flat());