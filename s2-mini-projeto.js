// Igualdade de Objetos (Exercício)

function Endereco(rua, cidade, cep) {
     this.rua = rua,
     this.cidade = cidade,
     this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')

function saoIguais(endereco1, endereco2) {
     
     return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep;
 }

saoIguais(endereco1, endereco2)

function temEnderecoMemoriaIguais(endereco1, endereco2) {

     if (endereco1 === endereco2) {
          console.log('Mesmo endereço')
     } else {
          console.log('Não é mesmo endereço')
     }
}

temEnderecoMemoriaIguais(endereco1, endereco1)