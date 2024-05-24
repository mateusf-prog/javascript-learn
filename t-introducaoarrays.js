// Introdução a Arrays 

// adicionar, remover, encontrar, dividir elementos, dividir arrays, combinar arrays

const numeros = [1, 2, 3]

// Inserção de elementos no inicio de um Array
numeros.unshift(2)
console.log(numeros)

// Inserção de elemento no meio do Array
numeros.splice(1, 0, 'a') // ele vai inserir o 'a' no indice 1 do array sem eliminar nada
console.log(numeros)

// Inserção de emento no final do Array
numeros.push(5)
console.log(numeros)

//----------------------------------//

// Econtrando elementos primitivos

const nums = [1, 2, 3, 4, 2]

console.log(nums.indexOf(3)) // retorna o indice que contém esse elemento
console.log(nums.indexOf(10)) // retorna '-1', quer dizer que nao encontrou o item

console.log(nums.lastIndexOf(2)) // retorna o indice que contém o ultimo valor dado

console.log(nums.includes(2)) // retorna true ou false se o item está no array ou nao