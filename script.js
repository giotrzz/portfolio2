

const API_URL = 'http://localhost:3000'


function gerarIconeLink(tipo) {
  if (tipo === "github") {
    return `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>`
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`
}

function gerarThumbSVG(index) {
  if (index === 0) {
    return `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="30" width="10" height="22" rx="2" fill="#fff" fill-opacity="0.9"/>
      <rect x="25" y="18" width="10" height="34" rx="2" fill="#f59e0b" fill-opacity="0.9"/>
      <rect x="42" y="10" width="10" height="42" rx="2" fill="#34d399" fill-opacity="0.9"/>
    </svg>`
  }
  return `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="40" height="30" rx="4" fill="white" fill-opacity="0.2" stroke="white" stroke-width="2"/>
    <line x1="10" y1="20" x2="50" y2="20" stroke="white" stroke-width="1.5"/>
    <rect x="15" y="25" width="12" height="8" rx="2" fill="white" fill-opacity="0.6"/>
    <rect x="33" y="25" width="12" height="8" rx="2" fill="white" fill-opacity="0.6"/>
    <line x1="30" y1="40" x2="30" y2="48" stroke="white" stroke-width="2"/>
    <rect x="20" y="48" width="20" height="4" rx="2" fill="white" fill-opacity="0.7"/>
  </svg>`
}


function renderizarProjetos(lista) {
  const grid = document.querySelector('.projetos-grid')
  if (!grid) return
  grid.innerHTML = ''

  for (let i = 0; i < lista.length; i++) {
    const projeto = lista[i]
    let tagsHTML = ''
    for (let j = 0; j < projeto.tags.length; j++) {
      tagsHTML += `<span class="tag ${projeto.tags[j].cor}">${projeto.tags[j].texto}</span>`
    }
    const card = document.createElement('div')
    card.className = 'projeto-card'
    card.dataset.index = projeto.id
    card.dataset.categoria = projeto.categoria
    card.innerHTML = `
      <div class="projeto-thumb" style="background: ${projeto.thumb};">
        ${gerarThumbSVG(projeto.id)}
      </div>
      <div class="projeto-body">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <p class="projeto-detail">${projeto.detalhe}</p>
        <div class="projeto-tags">${tagsHTML}</div>
        <a href="${projeto.link}" target="_blank" class="btn btn-sm">
          ${gerarIconeLink(projeto.linkIcone)}
          ${projeto.linkTexto}
        </a>
      </div>
    `
    grid.appendChild(card)
  }
  staggerGrid('.projeto-card')
  aplicarReveal()
}


function renderizarHabilidades(lista) {
  const grid = document.querySelector('.skills-grid')
  if (!grid) return
  grid.innerHTML = ''

  for (let i = 0; i < lista.length; i++) {
    const habilidade = lista[i]
    const card = document.createElement('div')
    card.className = 'skill-card'
    card.innerHTML = `
      <div class="skill-icon" style="background: ${habilidade.gradiente};">
        <svg viewBox="0 0 40 40" fill="none">
          <text x="8" y="28" font-size="20" fill="white">${habilidade.emoji}</text>
        </svg>
      </div>
      <h3>${habilidade.titulo}</h3>
      <p>${habilidade.descricao}</p>
      <div class="skill-bar">
        <div class="skill-fill" style="--w: ${habilidade.nivel}%"></div>
      </div>
    `
    grid.appendChild(card)
  }
  observarBarras()
  staggerGrid('.skill-card')
}

function renderizarCursos(lista) {
  const container = document.querySelector('.cursos-list')
  if (!container) return
  container.innerHTML = ''

  for (let i = 0; i < lista.length; i++) {
    const curso = lista[i]
    const card = document.createElement('div')
    card.className = 'curso-card'
    card.innerHTML = `
      <div class="curso-thumb" style="background: ${curso.gradiente};">
        <span>${curso.emoji}</span>
      </div>
      <div class="curso-info">
        <h4>${curso.titulo}</h4>
        <p>${curso.descricao}</p>
        <a href="${curso.linkCertificado}" target="_blank" class="btn btn-sm btn-outline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          Ver Certificado
        </a>
      </div>
    `
    container.appendChild(card)
  }
  staggerGrid('.curso-card')
}


function renderizarSobre(dados) {
  const bioEl = document.querySelector('.sobre-text h2 + p')
  if (bioEl) bioEl.textContent = dados.bio

  const fotoEl = document.querySelector('.sobre-img-placeholder img')
  if (fotoEl) fotoEl.src = dados.foto

  const tagsWrap = document.querySelector('.sobre-tags')
  if (tagsWrap) {
    tagsWrap.innerHTML = ''
    for (let i = 0; i < dados.tags.length; i++) {
      const span = document.createElement('span')
      span.className = `tag ${dados.tags[i].cor}`
      span.textContent = dados.tags[i].texto
      tagsWrap.appendChild(span)
    }
  }
}


function renderizarFormacao(lista) {
  const timeline = document.querySelector('.timeline')
  if (!timeline) return

  // Remove itens existentes, mantém só o título
  const titulo = timeline.querySelector('.timeline-title')
  timeline.innerHTML = ''
  if (titulo) timeline.appendChild(titulo)

  for (let i = 0; i < lista.length; i++) {
    const item = lista[i]
    const div = document.createElement('div')
    div.className = 'timeline-item'
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${item.periodo}</span>
        <h4>${item.titulo}</h4>
        <p class="timeline-inst">${item.instituicao}</p>
        <p>${item.descricao}</p>
      </div>
    `
    timeline.appendChild(div)
  }
  staggerGrid('.timeline-item')
}



let categoriaAtiva = 'todos'

async function filtrarProjetos(categoria) {
  categoriaAtiva = categoria

  try {
    const url = categoria === 'todos'
      ? `${API_URL}/projetos`
      : `${API_URL}/projetos?categoria=${categoria}`

    const res = await fetch(url)
    const lista = await res.json()

    if (lista.length === 0) {
      const grid = document.querySelector('.projetos-grid')
      grid.innerHTML = '<p class="sem-resultados">Nenhum projeto encontrado nesta categoria.</p>'
    } else {
      renderizarProjetos(lista)
    }
  } catch (err) {
    console.error('Erro ao filtrar projetos:', err)
  }

  const botoes = document.querySelectorAll('.filtro-btn')
  for (let i = 0; i < botoes.length; i++) {
    if (botoes[i].dataset.categoria === categoria) {
      botoes[i].classList.add('ativo')
    } else {
      botoes[i].classList.remove('ativo')
    }
  }
}

function criarBotoesFiltro() {
  const projetosContainer = document.querySelector('#projetos .container')
  if (!projetosContainer) return

  const categorias = [
    { valor: 'todos', texto: 'Todos' },
    { valor: 'web', texto: 'Web' },
    { valor: 'dados', texto: 'Dados' }
  ]

  const wrapFiltros = document.createElement('div')
  wrapFiltros.className = 'filtros-wrap'

  for (let i = 0; i < categorias.length; i++) {
    const btn = document.createElement('button')
    btn.className = 'filtro-btn' + (i === 0 ? ' ativo' : '')
    btn.dataset.categoria = categorias[i].valor
    btn.textContent = categorias[i].texto
    btn.addEventListener('click', () => filtrarProjetos(categorias[i].valor))
    wrapFiltros.appendChild(btn)
  }

  const grid = document.querySelector('.projetos-grid')
  projetosContainer.insertBefore(wrapFiltros, grid)
}

function setGreeting() {
  const hour = new Date().getHours()
  const greetingEl = document.getElementById('greeting')
  if (!greetingEl) return

  let text = ''
  if (hour >= 5 && hour < 12) {
    text = 'Bom dia! '
  } else if (hour >= 12 && hour < 18) {
    text = 'Boa tarde! '
  } else {
    text = 'Boa noite! '
  }
  greetingEl.textContent = text
}

const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

const hamburger = document.getElementById('hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  const spans = hamburger.querySelectorAll('span')
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)'
    spans[1].style.opacity = '0'
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)'
  } else {
    spans[0].style.transform = ''
    spans[1].style.opacity = ''
    spans[2].style.transform = ''
  }
})

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open')
    const spans = hamburger.querySelectorAll('span')
    spans[0].style.transform = ''
    spans[1].style.opacity = ''
    spans[2].style.transform = ''
  })
})


function aplicarReveal() {
  const revealEls = document.querySelectorAll(
    '.sobre-grid, .projeto-card, .skill-card, .timeline-item, .curso-card, .section-title, .section-label'
  )
  revealEls.forEach(el => el.classList.add('reveal'))

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.12 })

  revealEls.forEach(el => revealObserver.observe(el))
}

function staggerGrid(gridSelector) {
  const cards = document.querySelectorAll(gridSelector)
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`
  })
}

function observarBarras() {
  const skillFills = document.querySelectorAll('.skill-fill')
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated')
        barObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  skillFills.forEach(fill => barObserver.observe(fill))
}

const sections = document.querySelectorAll('section[id]')
const navItems = document.querySelectorAll('.nav-links a')

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => {
        item.style.color = ''
        item.style.fontWeight = ''
      })
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`)
      if (active) {
        active.style.color = 'var(--primary)'
        active.style.fontWeight = '600'
      }
    }
  })
}, { threshold: 0.4 })

sections.forEach(sec => sectionObserver.observe(sec))

async function inicializar() {
  setGreeting()
  criarBotoesFiltro()

  try {
    // Busca todas as seções em paralelo
    const [resProjetos, resHabilidades, resCursos, resSobre, resFormacao] = await Promise.all([
      fetch(`${API_URL}/projetos`),
      fetch(`${API_URL}/habilidades`),
      fetch(`${API_URL}/cursos`),
      fetch(`${API_URL}/sobre`),
      fetch(`${API_URL}/formacao`)
    ])

    const projetos    = await resProjetos.json()
    const habilidades = await resHabilidades.json()
    const cursos      = await resCursos.json()
    const sobre       = await resSobre.json()
    const formacao    = await resFormacao.json()

    renderizarProjetos(projetos)
    renderizarHabilidades(habilidades)
    renderizarCursos(cursos)
    renderizarSobre(sobre)
    renderizarFormacao(formacao)

    staggerGrid('.projeto-card')
    staggerGrid('.skill-card')
    staggerGrid('.timeline-item')
    staggerGrid('.curso-card')
    aplicarReveal()
    observarBarras()

  } catch (err) {
    console.error('Erro ao carregar dados da API:', err)
  }
}

inicializar()