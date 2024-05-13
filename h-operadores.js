// Operadores (aritiméticos, atribuição, comparação, lógicos, BitWise)

//----------------------------------------------------------------------------//

// Operadores Aritiméticos (+ , - , * , / , **)

let salario = 100
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** salario) // exponencial

//----------------------------------------------------------------------------//

// Incremento e decremento (++ , --)
let idade = 26

console.log(idade++) // imprime primeiro o valor da varivael e depois incrementa 
console.log(++idade) // incrementa primeiro e depois imprime

console.log(idade--)
console.log(--idade)

//----------------------------------------------------------------------------//

// Atribuição 

let valor = 10
valor -= valor  // valor é igual a valor menos valor
valor += valor  // valor é igual a valor mais valor

// Igualdade estrita (RECOMENDADA)
console.log(1 === 1) // TRUE | compara os valores e também o TIPO
console.log('1' === 1) // FALSE | tipos diferentes

// Igualdade solta
console.log(1 == 1) // TRUE | compara somente os valores
console.log('1' == 1) // TRUE | converte e compara

//----------------------------------------------------------------------------//

// Operador ternário

let pontos = 100
let tipoCliente = pontos > 100 ? 'premium' : 'comum'
console.log(tipoCliente)

//----------------------------------------------------------------------------//

// Operador lógico (&& , || , NOT)
console.log(true && true)   // TRUE
console.log(true && false)  // FALSE
console.log(false && false) // FALSE

console.log(true || true)   // TRUE
console.log(true || false)  // TRUE
console.log(false || false) // FALSE

let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho  // TRUE

// not (negação)
let candidatoRecusado = !podeAplicar
console.log(candidatoRecusado)