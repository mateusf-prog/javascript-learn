// Natureza Dinâmica de Objetos

const mouse = {
     cor: 'preto',
     marca: 'coolermaster'
}

// Adicionado dinamicamente uma propriedade e uma função no objeto mouse
// e alterando essa propriedade através da nova função

mouse.velocidade = 5000
mouse.trocarDpi = function(value) {
     console.log("Trocando DPI...")
     this.velocidade = value
}

console.log(mouse)
mouse.trocarDpi(3500)
console.log(mouse.velocidade)

// Apagando uma propriedade do objeto
delete mouse.velocidade

console.log(mouse)