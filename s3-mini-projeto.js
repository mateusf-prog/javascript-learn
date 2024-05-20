// Objeto potagem de Blog - Ecercício

function Comentario(autor, mensagem) {
     this.autor = autor,
     this.mensagem = mensagem
}

function Post(titulo, mensagem, autor, vizualizacoes, estaAoVivo) {
     this.titulo = titulo,
     this.mensagem = mensagem,
     this.autor = autor,
     this.vizualizacoes = vizualizacoes,
     this.comentarios = []
     this.estaAoVivo = estaAoVivo

     this.estaAoVivo = function(valor) {
          if (valor) {
               console.log('Está ao vivo')
          } else {
               console.log('Não está ao vivo')
          }
     }

     this.adicionarComentario = function(comentario) {
          this.comentarios.push(comentario)
     }
}

const comentario1 = new Comentario('Mateus', 'Este blog é muito bom')

const post1 = new Post('Dev F.E', '<texto do blog>', 'Dev Aprender', 20, true)

post1.adicionarComentario(comentario1)
post1.estaAoVivo(false)

console.log(post1)