// Clonar objetos em JS utilizando Object e Spread operator

const celular ={
     marca: 'Apple',
     tamanhoTela: 5.5,
     ligar: function() {
          console.log("Ligando ....")
     }
}

// Clonando o objeto 'celular' e adicionando mais uma propriedade 'bateria'
const clone = Object.assign({
     bateria: 5000
}, celular);
console.log(clone)

// Uma segunda forma de clonar objetos
const clone2 = {...celular};
console.log(clone2)