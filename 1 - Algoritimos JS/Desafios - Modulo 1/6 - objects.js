let livro = {
    nome: 'Marley e Eu',
    anoLancamento: '2024',
    autor: 'Will Smith',
    nrPaginas: 12,
    genero: 'Comédia',
    atores: ['Scooby', 'Super Cao', 'Batcão'],

    mostrarCaracteristicas: function() {
        return `${this.nome} é um livro para ficar feliz.`
    }
}

console.log(livro.mostrarCaracteristicas())

let filme = {
    titulo: "High School Musical",
    anoLancamento: 2007,
    atores: ['Zac Efrom', 'Arthur Morgan', 'Cloud Strife'],
    genero: 'guerra',

    mostrarCaracteristicas: function() {
        return `${this.titulo} é um filme de drama.`
    }
}

console.log(filme.mostrarCaracteristicas())


let jogadores = ['Caça Rato', 'Ganso', 'Pato']

//for in - itera sobre indices, indexar valores
for ( let key in jogadores){
    console.log(jogadores[key])
}

//for of - itera sobre os valores
let palavra = 'Gremio'

for (let value of palavra) {
    console.log(value)
}

// Calcular a media das notas dos alunos de um professor e diga se a turma do professor está na média.

let professor = {
    nome: 'Stark Parker',
    materia: 'Fisica',
    notas:{
        aluno1: [5,2],
        aluno2: [3,7]
    }
}

let somaNotas = 0
let numeroAlunos = 0

for (let aluno in professor.notas){
    somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

    numeroAlunos++
}

let media = somaNotas / numeroAlunos;

if (media >= 6){
    console.log(`a média da turma é ${media} e esta acima do padrao`)
} else {
    console.log(`a média da turma é ${media} e esta abaixo do padrao`)
}


let livraria = [
    {titulo: "1984", autor: "George Orwell", ano: 1984},
    {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
    {titulo: "Código Limpo", autor: "Martin", ano: 2010},
    {titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910},
    {titulo: "O Principe", autor: "Maquiável", ano: 2002}
]

//For Of para iterar e verificar os livros publicados antes do ano 2000.

// for(let livro in livraria){
//     console.log(livraria[livro].ano)
// }

for(let livro of livraria){
    if(livro.ano < 2000)
    console.log(livro.ano)
}

let filmes = [
    {titulo: "Sempre ao seu lado", genero: 'De chorar'},
    {titulo: "Massacre da Serra Eletrica", genero: 'Terror'},
    {titulo: "Minha mae é uma peça", genero: 'Comedia'},
    {titulo: "Tarzan", genero: 'Aventura'},
    {titulo: "Como eu era antes de você", genero: 'De chorar'},
    {titulo: "Jogo da Imitação", genero: 'Historico'},
    {titulo: "Top Gun", genero: 'Guerra'},
    {titulo: "Your Name", genero: 'Romance'},
    {titulo: "Dead Pool", genero: 'Heroi'},
    {titulo: "Batman Forever", genero: 'Heroi'}
]

// listar a contagem de generos dos filmes

let contagemFilmes = {}

filmes.forEach((filme) => {
    if(contagemFilmes[filme.genero]){
        contagemFilmes[filme.genero]++
    }
    else {
        contagemFilmes[filme.genero] = 1
    }
})

console.table(contagemFilmes)