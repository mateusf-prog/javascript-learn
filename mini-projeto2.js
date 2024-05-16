// Medidor de velocidade

// Velocidade máxima 70
// A cada 5km acima do limite voce ganha 1 ponto
// Caso os pontos sejam maior que 12 a carteira é suspendida

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
     const velocidadeMaxima = 70
     const kmPonto = 5
     const limitePontosPerdaCarteira = 12

     if (velocidade <= velocidadeMaxima) 
          console.log("OK")

     const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPonto)

     if (pontos >= limitePontosPerdaCarteira) 
          console.log("Carteira suspensa!")
     else
          console.log(pontos)
}