// Receba uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTipo(50);

function exibirTipo(valor) {
     for (let i=1; i<=valor; i++) {
          let res = i % 2 == 0 ? console.log(i + " - PAR") : console.log(i + " - IMPAR")
     }
}