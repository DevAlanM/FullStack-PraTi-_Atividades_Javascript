//Recursividade dividir um problema grande em pequenas partes reutilizando a mesma funcao

function fatorial(n){
    if (n === 0){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

// lifo - last in First Out

// 5 * fatorial(4)
// 4 * fatorial(3)
// 3 * fatorial(2)
// 2 * fatorial(1)
// 1 * fatorial(0)

// 1 * 1 = 1
// 2 * 1 = 2
// 3 * 2 = 6
// 4 * 6 = 24
// 5 * 24 = 120

//Soma dos números de 1 até N Recursivo

function somaNumero(num){
    if(num === 1){
        return 1
    } else{
        return num + somaNumero(num - 1)
    }        
}

console.log(somaNumero(5))

// 5 + 4
// 4 + 3
// 3 + 2
// 2 + 1
// 1 = 1

//1 + 2 + 3 + 4 + 5 = 15


//Fibonacci Recursivo
function fibo(n)
{
    if (n === 0)
        return 0
    else if(n === 1)
        return 1
    else {
        return fibo(n - 1) + fibo(n - 2)
    }
}

console.log(fibo(8))


let categorias = [
    {
        id: 1,
        nome: "Eletrônicos",
        filhos: [
            {id: 2, nome: "Celulares", filhos: []},
            {id: 3, nome: "Computadores", filhos: [
                {id: 4, nome: "Tablets", filhos: []}
            ]}
        ]
    },
    {
        id: 5,
        nome: "Louças",
        filhos: []
    }
]

function imprimirCategorias(lista, nivel = 0){
    for(let categoria of lista) {
        console.log(" ".repeat(nivel * 2) + categoria.nome)
        
        if(categoria.filhos.length > 0)
        {
            imprimirCategorias(categoria.filhos, nivel + 1)
        }
    }
}

imprimirCategorias(categorias)