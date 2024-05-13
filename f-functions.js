// Functions

// Padrao de nomeação = Verbo + Substantivo
// EX: resetaCor
//---------------------------------------------------------------------//
let corSite = "azul"
function resetaCor(cor) {
     corSite = cor
}

 // resetou a corSite
resetaCor() 
console.log(corSite)


// Setou a cor amarelo 
resetaCor("Amarelo") 
console.log(corSite)

//---------------------------------------------------------------------//

// função que soma dois valores passados como argumento
function soma(a, b) {
     return a + b
}

// imprime o resultado da chamada da função
console.log(soma(20, 5.5))


