// Exercício - objeto endereço

/** Criar um objeto endereço que contenha:
 * Rua, Cidade, CEP, exibirEndereco(endereco)
 */

class Endereco {
     constructor(rua, cidade, cep) {
          this.rua = rua
          this.cidade = cidade
          this.cep = cep

          this.exibirEndereco = function() {
               console.log(rua + ", " + cidade + ", " + cep)
          }
     }
}

const endereco = new Endereco("Rua BPN", "Sao José", 12212700);

console.log(endereco.exibirEndereco())
