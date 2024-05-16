// Criar um método para ler propriedades de um objeto
// e exibir somente as propriedades do tipo string que estão nesse objeto

const pessoa = {
     nome: "Mateus",
     idade: 26,
     email: "123@gmail.com"
}
 
exibirPropriedade(pessoa);

function exibirPropriedade(obj) {
     for (prop in obj) {
          if (typeof obj[prop] === 'string') {
               console.log(prop, obj[prop])
          }
     }
}