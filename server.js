const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

fastify.register(cors, { origin: '*' })

// Dados em memória (baseados no seu script.js)
let projetos = [
  {
    id: 0,
    titulo: "Análise de Dados dos Censos",
    descricao: "Análise e coleta de dados demográficos, educacionais e sociais.",
    categoria: "dados",
    link: "https://github.com/koitech-API"
  },
  {
    id: 1,
    titulo: "Primeiro Portfólio Pessoal",
    descricao: "Desenvolvido com HTML CSS e Bootstrap.",
    categoria: "web",
    link: "https://giotrzz.github.io/portfolio/"
  }
]

// GET — lista todos os projetos
fastify.get('/projetos', async (request, reply) => {
  return projetos
})

// POST — adiciona um novo projeto
fastify.post('/projetos', async (request, reply) => {
  const novo = request.body
  novo.id = projetos.length > 0 ? Math.max(...projetos.map(p => p.id)) + 1 : 0
  projetos.push(novo)
  reply.code(201)
  return novo
})

// PUT — atualiza um projeto existente
fastify.put('/projetos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = projetos.findIndex(p => p.id === id)

  if (index === -1) {
    reply.code(404)
    return { erro: 'Projeto não encontrado' }
  }

  projetos[index] = { ...projetos[index], ...request.body }
  return projetos[index]
})

// DELETE — remove um projeto
fastify.delete('/projetos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = projetos.findIndex(p => p.id === id)

  if (index === -1) {
    reply.code(404)
    return { erro: 'Projeto não encontrado' }
  }

  const removido = projetos.splice(index, 1)[0]
  return { mensagem: 'Projeto removido', projeto: removido }
})

// Inicia o servidor
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})