class Node {
    constructor(value){
        this.value = value
        this.proximo = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
    }

    inserirInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        this.head = novo
    }

    imprimir() {
        let atual = this.head
        let str = ""

        while(atual){
            str += atual.value + "->"
            atual = atual.proximo
        }
        str += 'null'
        console.log(str)
    }
}

let list = new LinkedList()

list.inserirInicio(10)
list.inserirInicio(9)

list.imprimir()