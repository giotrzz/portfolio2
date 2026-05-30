const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')

fastify.register(cors, { origin: '*' })

// ============================================================
// DADOS EM MEMÓRIA
// ============================================================

let projetos = [
  {
    id: 0,
    titulo: "Análise de Dados dos Censos",
    descricao: "Análise e coleta de dados demográficos, educacionais e sociais de São José dos Campos e região utilizando Python e pandas.",
    detalhe: "Projeto de faculdade desenvolvido em equipe na metodologia ágil. Desenvolvi papel de scrum master, participando ativamente no gerenciamento do time e auxiliando nas tarefas de desenvolvimento e análises de dados.",
    tags: [
      { texto: "Python", cor: "tag-blue" },
      { texto: "Pandas", cor: "tag-green" },
      { texto: "Matplotlib", cor: "tag-orange" },
      { texto: "Google Colab", cor: "tag-yellow" },
      { texto: "HTML", cor: "tag-orange" },
      { texto: "CSS", cor: "tag-teal" },
      { texto: "Flask", cor: "tag-dark" }
    ],
    categoria: "dados",
    link: "https://github.com/koitech-API",
    linkTexto: "Ver no GitHub",
    linkIcone: "github",
    thumb: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 1,
    titulo: "Primeiro Portfólio Pessoal",
    descricao: "Desenvolvido com HTML CSS e bootstrap. Essa é a primeira versão deste portfolio.",
    detalhe: "Projeto desenvolvido com foco em design responsivo, aplicando boas práticas de desenvolvimento front-end.",
    tags: [
      { texto: "HTML", cor: "tag-orange" },
      { texto: "CSS", cor: "tag-teal" },
      { texto: "Bootstrap", cor: "tag-yellow" }
    ],
    categoria: "web",
    link: "https://giotrzz.github.io/portfolio/",
    linkTexto: "Ver Projeto",
    linkIcone: "externo",
    thumb: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  }
]

let habilidades = [
  {
    id: 0,
    titulo: "Python",
    descricao: "Pandas, NumPy, Matplotlib, Flask",
    nivel: 75,
    gradiente: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    emoji: "🐍"
  },
  {
    id: 1,
    titulo: "Data Analysis",
    descricao: "Excel, SQL, Visualização de dados",
    nivel: 70,
    gradiente: "linear-gradient(135deg, #10b981, #047857)",
    emoji: "📊"
  },
  {
    id: 2,
    titulo: "Web Dev",
    descricao: "HTML, CSS, JavaScript, Bootstrap",
    nivel: 80,
    gradiente: "linear-gradient(135deg, #f59e0b, #b45309)",
    emoji: "🌐"
  },
  {
    id: 3,
    titulo: "Design",
    descricao: "UI/UX, Bootstrap, Figma",
    nivel: 65,
    gradiente: "linear-gradient(135deg, #ec4899, #be185d)",
    emoji: "🎨"
  },
  {
    id: 4,
    titulo: "Cibersegurança",
    descricao: "Redes, Sistemas Operacionais",
    nivel: 55,
    gradiente: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
    emoji: "🔒"
  },
  {
    id: 5,
    titulo: "Metodologias",
    descricao: "SCRUM, Trabalho em equipe",
    nivel: 72,
    gradiente: "linear-gradient(135deg, #06b6d4, #0e7490)",
    emoji: "⚡"
  }
]

let cursos = [
  {
    id: 0,
    titulo: "Escola de Inovadores",
    descricao: "Programa voltado à formação de empreendedores inovadores. Aprendi a transformar ideias em soluções reais, aplicando ferramentas de gestão, inovação e design thinking para estruturar um projeto com potencial de impacto social e tecnológico.",
    gradiente: "linear-gradient(135deg, #f43f5e, #ec4899)",
    emoji: "🎓",
    linkCertificado: "src/certificado_escola_inovadores.pdf"
  }
]

// Sobre é um objeto único (não uma lista), mas mantemos em array para o PUT funcionar por ID
let sobre = {
  nome: "Giovana Tarozo",
  bio: "Sou estudante de tecnologia que ama explorar o mundo tech e suas inovações contínuas, além de nerd possuo outros hobbies como futebol e tenis de mesa.",
  foto: "src/foto_gi.jpeg",
  tags: [
    { texto: "Python",     cor: "tag-blue" },
    { texto: "HTML",       cor: "tag-orange" },
    { texto: "CSS",        cor: "tag-green" },
    { texto: "Flask",      cor: "tag-dark" },
    { texto: "JavaScript", cor: "tag-yellow" },
    { texto: "Bootstrap",  cor: "tag-teal" },
    { texto: "SQL",        cor: "tag-red" }
  ],
  links: [
    { texto: "LinkedIn", url: "https://www.linkedin.com/in/giovana-tarozo/", icone: "linkedin" },
    { texto: "GitHub",   url: "https://github.com/giotrzz",                  icone: "github" }
  ]
}

let formacao = [
  {
    id: 0,
    tipo: "academica",
    periodo: "2025 — Atual",
    titulo: "Tecnólogo em Desenvolvimento de Software Multiplataforma",
    instituicao: "Ensino Superior",
    descricao: "Formação moderna que une conhecimentos de computação, sistemas operacionais, lógica e matemática com tecnologias para desenvolvimento de software web, mobile, IA, banco de dados e computação em nuvem."
  },
  {
    id: 1,
    tipo: "academica",
    periodo: "Concluído",
    titulo: "Técnico em Informática",
    instituicao: "Ensino Médio Técnico",
    descricao: "Bases sólidas em lógica de programação, hardware, redes e sistemas operacionais. Desenvolvimento de habilidades como organização, trabalho em equipe e inovação."
  }
]

// ============================================================
// ROTAS — PROJETOS
// ============================================================

fastify.get('/projetos', async (request, reply) => {
  const { categoria } = request.query
  if (categoria && categoria !== 'todos') {
    return projetos.filter(p => p.categoria === categoria)
  }
  return projetos
})

fastify.get('/projetos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const projeto = projetos.find(p => p.id === id)
  if (!projeto) {
    reply.code(404)
    return { erro: 'Projeto não encontrado' }
  }
  return projeto
})

fastify.post('/projetos', async (request, reply) => {
  const novo = request.body
  novo.id = projetos.length > 0 ? Math.max(...projetos.map(p => p.id)) + 1 : 0
  projetos.push(novo)
  reply.code(201)
  return novo
})

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

// ============================================================
// ROTAS — HABILIDADES
// ============================================================

fastify.get('/habilidades', async (request, reply) => {
  return habilidades
})

fastify.get('/habilidades/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const habilidade = habilidades.find(h => h.id === id)
  if (!habilidade) {
    reply.code(404)
    return { erro: 'Habilidade não encontrada' }
  }
  return habilidade
})

fastify.post('/habilidades', async (request, reply) => {
  const nova = request.body
  nova.id = habilidades.length > 0 ? Math.max(...habilidades.map(h => h.id)) + 1 : 0
  habilidades.push(nova)
  reply.code(201)
  return nova
})

fastify.put('/habilidades/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = habilidades.findIndex(h => h.id === id)
  if (index === -1) {
    reply.code(404)
    return { erro: 'Habilidade não encontrada' }
  }
  habilidades[index] = { ...habilidades[index], ...request.body }
  return habilidades[index]
})

fastify.delete('/habilidades/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = habilidades.findIndex(h => h.id === id)
  if (index === -1) {
    reply.code(404)
    return { erro: 'Habilidade não encontrada' }
  }
  const removida = habilidades.splice(index, 1)[0]
  return { mensagem: 'Habilidade removida', habilidade: removida }
})

// ============================================================
// ROTAS — CURSOS
// ============================================================

fastify.get('/cursos', async (request, reply) => {
  return cursos
})

fastify.get('/cursos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const curso = cursos.find(c => c.id === id)
  if (!curso) {
    reply.code(404)
    return { erro: 'Curso não encontrado' }
  }
  return curso
})

fastify.post('/cursos', async (request, reply) => {
  const novo = request.body
  novo.id = cursos.length > 0 ? Math.max(...cursos.map(c => c.id)) + 1 : 0
  cursos.push(novo)
  reply.code(201)
  return novo
})

fastify.put('/cursos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = cursos.findIndex(c => c.id === id)
  if (index === -1) {
    reply.code(404)
    return { erro: 'Curso não encontrado' }
  }
  cursos[index] = { ...cursos[index], ...request.body }
  return cursos[index]
})

fastify.delete('/cursos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = cursos.findIndex(c => c.id === id)
  if (index === -1) {
    reply.code(404)
    return { erro: 'Curso não encontrado' }
  }
  const removido = cursos.splice(index, 1)[0]
  return { mensagem: 'Curso removido', curso: removido }
})


// ============================================================
// ROTAS — SOBRE
// ============================================================

fastify.get('/sobre', async (request, reply) => {
  return sobre
})

fastify.put('/sobre', async (request, reply) => {
  sobre = { ...sobre, ...request.body }
  return sobre
})

// ============================================================
// ROTAS — FORMAÇÃO
// ============================================================

fastify.get('/formacao', async (request, reply) => {
  const { tipo } = request.query
  if (tipo) return formacao.filter(f => f.tipo === tipo)
  return formacao
})

fastify.get('/formacao/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const item = formacao.find(f => f.id === id)
  if (!item) {
    reply.code(404)
    return { erro: 'Formação não encontrada' }
  }
  return item
})

fastify.post('/formacao', async (request, reply) => {
  const novo = request.body
  novo.id = formacao.length > 0 ? Math.max(...formacao.map(f => f.id)) + 1 : 0
  formacao.push(novo)
  reply.code(201)
  return novo
})

fastify.put('/formacao/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = formacao.findIndex(f => f.id === id)
  if (index === -1) {
    reply.code(404)
    return { erro: 'Formação não encontrada' }
  }
  formacao[index] = { ...formacao[index], ...request.body }
  return formacao[index]
})

fastify.delete('/formacao/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const index = formacao.findIndex(f => f.id === id)
  if (index === -1) {
    reply.code(404)
    return { erro: 'Formação não encontrada' }
  }
  const removido = formacao.splice(index, 1)[0]
  return { mensagem: 'Formação removida', formacao: removido }
})

// ============================================================
// INICIA O SERVIDOR
// ============================================================

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})