const fastify = require('fastify')({ logger: true })
const cors = require('@fastify/cors')
const pool = require('./database')

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
    titulo: "KOITECH-AERO",
    descricao: "Sistema web para gerenciamento, consulta e rastreabilidade de normas técnicas utilizadas em atividades de engenharia.",
    detalhe: "Projeto desenvolvido em equipe para solucionar a dificuldade de organização e busca de normas técnicas. A plataforma permite registrar, consultar, classificar e rastrear normas de forma estruturada, tornando o acesso às informações mais rápido e eficiente. O sistema conta com recursos de busca, organização por categorias, controle de informações e integração entre frontend, backend e banco de dados.",
    tags: [
      { texto: "React", cor: "tag-teal" },
      { texto: "TypeScript", cor: "tag-yellow" },
      { texto: "PostgreSQL", cor: "tag-orange" },
      { texto: "Docker", cor: "tag-teal" }
    ],
    categoria: "web",
    link: "https://github.com/KoiTech-Aero",
    linkTexto: "Ver Repositório",
    linkIcone: "externo",
    thumb: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
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
    const resultado = await pool.query(
      'SELECT * FROM projetos WHERE categoria = $1 ORDER BY id',
      [categoria]
    )

    return resultado.rows
  }

  const resultado = await pool.query(
    'SELECT * FROM projetos ORDER BY id'
  )

  return resultado.rows
})

fastify.get('/projetos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'SELECT * FROM projetos WHERE id = $1',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Projeto não encontrado' }
  }

  return resultado.rows[0]
})

fastify.post('/projetos', async (request, reply) => {
  const { titulo, descricao, detalhe, categoria, link, linkTexto, linkIcone, thumb } = request.body

  const resultado = await pool.query(
    `INSERT INTO projetos 
    (titulo, descricao, detalhe, categoria, link, link_texto, link_icone, thumb)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *`,
    [titulo, descricao, detalhe, categoria, link, linkTexto, linkIcone, thumb]
  )

  reply.code(201)
  return resultado.rows[0]
})

fastify.put('/projetos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const { titulo, descricao, detalhe, categoria, link, linkTexto, linkIcone, thumb } = request.body

  const resultado = await pool.query(
    `UPDATE projetos SET
      titulo = $1,
      descricao = $2,
      detalhe = $3,
      categoria = $4,
      link = $5,
      link_texto = $6,
      link_icone = $7,
      thumb = $8
    WHERE id = $9
    RETURNING *`,
    [titulo, descricao, detalhe, categoria, link, linkTexto, linkIcone, thumb, id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Projeto não encontrado' }
  }

  return resultado.rows[0]
})

fastify.delete('/projetos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'DELETE FROM projetos WHERE id = $1 RETURNING *',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Projeto não encontrado' }
  }

  return { mensagem: 'Projeto removido', projeto: resultado.rows[0] }
})

// ============================================================
// ROTAS — HABILIDADES
// ============================================================

fastify.get('/habilidades', async (request, reply) => {
  const resultado = await pool.query(
    'SELECT * FROM habilidades ORDER BY id'
  )

  return resultado.rows
})

fastify.get('/habilidades/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'SELECT * FROM habilidades WHERE id = $1',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Habilidade não encontrada' }
  }

  return resultado.rows[0]
})

fastify.post('/habilidades', async (request, reply) => {
  const { titulo, descricao, nivel, gradiente, emoji } = request.body

  const resultado = await pool.query(
    `INSERT INTO habilidades 
    (titulo, descricao, nivel, gradiente, emoji)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [titulo, descricao, nivel, gradiente, emoji]
  )

  reply.code(201)
  return resultado.rows[0]
})

fastify.put('/habilidades/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const { titulo, descricao, nivel, gradiente, emoji } = request.body

  const resultado = await pool.query(
    `UPDATE habilidades SET
      titulo = $1,
      descricao = $2,
      nivel = $3,
      gradiente = $4,
      emoji = $5
    WHERE id = $6
    RETURNING *`,
    [titulo, descricao, nivel, gradiente, emoji, id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Habilidade não encontrada' }
  }

  return resultado.rows[0]
})

fastify.delete('/habilidades/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'DELETE FROM habilidades WHERE id = $1 RETURNING *',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Habilidade não encontrada' }
  }

  return { mensagem: 'Habilidade removida', habilidade: resultado.rows[0] }
})

// ============================================================
// ROTAS — CURSOS
// ============================================================

fastify.get('/cursos', async (request, reply) => {
  const resultado = await pool.query(
    'SELECT * FROM cursos ORDER BY id'
  )

  return resultado.rows
})

fastify.get('/cursos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'SELECT * FROM cursos WHERE id = $1',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Curso não encontrado' }
  }

  return resultado.rows[0]
})

fastify.post('/cursos', async (request, reply) => {
  const { titulo, descricao, gradiente, emoji, linkCertificado } = request.body

  const resultado = await pool.query(
    `INSERT INTO cursos 
    (titulo, descricao, gradiente, emoji, link_certificado)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [titulo, descricao, gradiente, emoji, linkCertificado]
  )

  reply.code(201)
  return resultado.rows[0]
})

fastify.put('/cursos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const { titulo, descricao, gradiente, emoji, linkCertificado } = request.body

  const resultado = await pool.query(
    `UPDATE cursos SET
      titulo = $1,
      descricao = $2,
      gradiente = $3,
      emoji = $4,
      link_certificado = $5
    WHERE id = $6
    RETURNING *`,
    [titulo, descricao, gradiente, emoji, linkCertificado, id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Curso não encontrado' }
  }

  return resultado.rows[0]
})

fastify.delete('/cursos/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'DELETE FROM cursos WHERE id = $1 RETURNING *',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Curso não encontrado' }
  }

  return { mensagem: 'Curso removido', curso: resultado.rows[0] }
})

// ============================================================
// ROTAS — SOBRE
// ============================================================

fastify.get('/sobre', async (request, reply) => {
  const resultado = await pool.query(
    'SELECT * FROM sobre LIMIT 1'
  )

  return resultado.rows[0]
})

fastify.put('/sobre', async (request, reply) => {
  const { nome, bio, foto } = request.body

  const resultado = await pool.query(
    `UPDATE sobre SET
      nome = $1,
      bio = $2,
      foto = $3
    WHERE id = 1
    RETURNING *`,
    [nome, bio, foto]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Dados sobre não encontrados' }
  }

  return resultado.rows[0]
})

// ============================================================
// ROTAS — FORMAÇÃO
// ============================================================

fastify.get('/formacao', async (request, reply) => {
  const { tipo } = request.query

  if (tipo) {
    const resultado = await pool.query(
      'SELECT * FROM formacao WHERE tipo = $1 ORDER BY id',
      [tipo]
    )

    return resultado.rows
  }

  const resultado = await pool.query(
    'SELECT * FROM formacao ORDER BY id'
  )

  return resultado.rows
})

fastify.get('/formacao/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'SELECT * FROM formacao WHERE id = $1',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Formação não encontrada' }
  }

  return resultado.rows[0]
})

fastify.post('/formacao', async (request, reply) => {
  const { tipo, periodo, titulo, instituicao, descricao } = request.body

  const resultado = await pool.query(
    `INSERT INTO formacao
    (tipo, periodo, titulo, instituicao, descricao)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`,
    [tipo, periodo, titulo, instituicao, descricao]
  )

  reply.code(201)
  return resultado.rows[0]
})

fastify.put('/formacao/:id', async (request, reply) => {
  const id = parseInt(request.params.id)
  const { tipo, periodo, titulo, instituicao, descricao } = request.body

  const resultado = await pool.query(
    `UPDATE formacao SET
      tipo = $1,
      periodo = $2,
      titulo = $3,
      instituicao = $4,
      descricao = $5
    WHERE id = $6
    RETURNING *`,
    [tipo, periodo, titulo, instituicao, descricao, id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Formação não encontrada' }
  }

  return resultado.rows[0]
})

fastify.delete('/formacao/:id', async (request, reply) => {
  const id = parseInt(request.params.id)

  const resultado = await pool.query(
    'DELETE FROM formacao WHERE id = $1 RETURNING *',
    [id]
  )

  if (resultado.rows.length === 0) {
    reply.code(404)
    return { erro: 'Formação não encontrada' }
  }

  return { mensagem: 'Formação removida', formacao: resultado.rows[0] }
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