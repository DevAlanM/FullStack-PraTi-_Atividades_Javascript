const formAdicionar = document.getElementById('form-adicionar')
const inputItem = document.getElementById('input-item')
const listaItens = document.getElementById('lista-itens')
const btnLimpar = document.getElementById('btn-limpar')

let itens = []

window.addEventListener('DOMContentLoaded', () => {
  const dados = localStorage.getItem('listaCompras')

  if(dados) {
    itens = JSON.parse(dados)
    renderizarLista()
  }
})

function salvarDados(){
  localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function renderizarLista(){
  listaItens.innerHTML = ''
  
  itens.forEach((item, index) =>{
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = item

    const btnRemover = document.createElement('button')
    btnRemover.textContent = 'X'
    btnRemover.title = 'Remover Item'

    btnRemover.addEventListener('click' , () => {
      removerItem(index)
    })

    li.append(span, btnRemover)
    listaItens.appendChild(li)
  })
}

formAdicionar.addEventListener('submit', (event) => {
  event.preventDefault()
  const novoItem = inputItem.value.trim();
  if(!novoItem) return

  itens.push(novoItem)
  salvarDados()
  renderizarLista()

  inputItem.value = ''
})

function removerItem(index){
  itens.splice(index, 1)
  salvarDados()
  renderizarLista()
}

btnLimpar.addEventListener('click', () =>{
  if(confirm('Deseja Limpar toda a lista?')) {
    itens = []
    salvarDados()
    renderizarLista()
  }
})