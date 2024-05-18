// Constructor Functions 

class Celular {
     constructor(marcaCelular, tamanhoTela, bateria) {
          this.marcaCelular = marcaCelular,
               this.tamanhoTela = tamanhoTela,
               this.bateria = bateria,

               this.ligar = function () {
                    console.log("Ligando....")
               }
               
               this.desligar = function() {
                    console.log("Desligando...")
               }
     }
}

const celular = new Celular('Apple', 5.5, 5500)

console.log(celular)
console.log(celular.ligar())
console.log(celular.desligar())