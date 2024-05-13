// Tipos de funções (retorno)

// Realiza uma tarefa, não retorna nada
function imprimeNome() {
     console.log('Mateus')
}

imprimeNome()

//---------------------------------------------------------------//

// Realiza uma tarefa, retorna algo
function multiplicarPorDois(valor) {
     return valor * 2
}

let result = multiplicarPorDois(5)
console.log(result)