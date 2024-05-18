// Calcular a média a partir de um array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [90, 80, 95, 60, 50]

console.log(calcularNota(notas))

function calcularMedia(array) {

     let total = 0;
     for (const n of array) {
          total += n
     }
     
     return total / array.length
}

function calcularNota(array) {

     const media = calcularMedia(notas)
     if (media <= 59) console.log(media + " F")
     else if (media <=69) console.log(media + " D")
     else if (media <= 79) console.log(media + " C")
     else if (media <= 89) console.log(media + " B")
     else console.log(media + " A")
}