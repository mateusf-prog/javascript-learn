// Factory Functions (Função de Fábrica)

// Objeto celular - Hardcode
const celular = {
     marca: 'Apple',
     tamanhoTela: 5.5,
     bateria: 5000,
     ligar : function() {
          console.log("Fzendo ligação...")
     }
}

// função que cria um celular recebendo os parâmetros
function criarCelular(marca, tamanhoTela, bateria){
     return {
          marca,
          tamanhoTela,
          bateria,
          ligar() {
               console.log("Fazendo ligação...")
          }
     }
}

const celular1 = criarCelular("Motorola", 5.5, 5000)
const celular2 = criarCelular("Samsung", 6, 5500)

console.log(celular1)
console.log(celular2)