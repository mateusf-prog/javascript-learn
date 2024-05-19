// Trabalhando com Datas no JS

// pega a data atual com GMT 
const data1 = new Date()
console.log(data1)

data1.setMonth(9)  // alterando mês 
console.log(data1)


// definindo uma datade forma personalizada
const data2 = new Date("March 06 2019 09:30")
console.log(data2)



// definindo outra data de forma personalizada (ano, mês, dia, hora, minuto)
const data3 = new Date(2024, 4, 20, 9, 30)
console.log(data3)


// converte para padrao iso (para bancos de dados)
console.log(data1.toISOString())

// converte a data para String 
console.log(data1.toDateString())

