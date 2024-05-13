// divisível por 3 = Fizz
// divisível por 5 = Buzz
// divisível por 3 e 5 = FizzBuzz
// não divisível por 3 ou 5  = entrada
// não for número = 'Não é um número'

function fizzBuzz(e) {
     if (typeof e !== 'number')
          return 'Não é um número'
     else if (e % 3 == 0 && e % 5 == 0)
          return 'FizzBuzz'
     else if (e % 5 == 0)
          return 'Buzz'
     else if (e % 3 == 0) 
          return "Fizz"
     return e
     
     
}

console.log(fizzBuzz(62))