// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(50);

function somar(valor) {

     let multiplosTres = 0
     let multiplosCinco = 0

     for (let i=0; i<=valor; i++) {
          if (i % 3 === 0)
               multiplosTres += i
          if (i % 5 === 0)
               multiplosCinco += i
     }

     console.log(multiplosCinco + multiplosTres)
}