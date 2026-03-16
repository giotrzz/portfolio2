/* 
   DADOS EM ARRAYS/OBJETOS
   (Requisito: dados carregados a partir de arrays no JS)
 */

const projetos = [
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
];

const habilidades = [
  {
    titulo: "Python",
    descricao: "Pandas, NumPy, Matplotlib, Flask",
    nivel: 75,
    gradiente: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    emoji: "🐍"
  },
  {
    titulo: "Data Analysis",
    descricao: "Excel, SQL, Visualização de dados",
    nivel: 70,
    gradiente: "linear-gradient(135deg, #10b981, #047857)",
    emoji: "📊"
  },
  {
    titulo: "Web Dev",
    descricao: "HTML, CSS, JavaScript, Bootstrap",
    nivel: 80,
    gradiente: "linear-gradient(135deg, #f59e0b, #b45309)",
    emoji: "🌐"
  },
  {
    titulo: "Design",
    descricao: "UI/UX, Bootstrap, Figma",
    nivel: 65,
    gradiente: "linear-gradient(135deg, #ec4899, #be185d)",
    emoji: "🎨"
  },
  {
    titulo: "Cibersegurança",
    descricao: "Redes, Sistemas Operacionais",
    nivel: 55,
    gradiente: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
    emoji: "🔒"
  },
  {
    titulo: "Metodologias",
    descricao: "SCRUM, Trabalho em equipe",
    nivel: 72,
    gradiente: "linear-gradient(135deg, #06b6d4, #0e7490)",
    emoji: "⚡"
  }
];

const cursos = [
  {
    titulo: "Escola de Inovadores",
    descricao: "Programa voltado à formação de empreendedores inovadores. Aprendi a transformar ideias em soluções reais, aplicando ferramentas de gestão, inovação e design thinking para estruturar um projeto com potencial de impacto social e tecnológico.",
    gradiente: "linear-gradient(135deg, #f43f5e, #ec4899)",
    emoji: "🎓",
    linkCertificado: "src/certificado_escola_inovadores.pdf"
  }
];

/*
   FUNÇÕES DE RENDERIZAÇÃO
   (Requisito 3: Funções) */

function gerarIconeLink(tipo) {
  if (tipo === "github") {
    return `<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;
}

function gerarThumbSVG(index) {
  if (index === 0) {
    return `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="30" width="10" height="22" rx="2" fill="#fff" fill-opacity="0.9"/>
      <rect x="25" y="18" width="10" height="34" rx="2" fill="#f59e0b" fill-opacity="0.9"/>
      <rect x="42" y="10" width="10" height="42" rx="2" fill="#34d399" fill-opacity="0.9"/>
    </svg>`;
  }
  return `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="40" height="30" rx="4" fill="white" fill-opacity="0.2" stroke="white" stroke-width="2"/>
    <line x1="10" y1="20" x2="50" y2="20" stroke="white" stroke-width="1.5"/>
    <rect x="15" y="25" width="12" height="8" rx="2" fill="white" fill-opacity="0.6"/>
    <rect x="33" y="25" width="12" height="8" rx="2" fill="white" fill-opacity="0.6"/>
    <line x1="30" y1="40" x2="30" y2="48" stroke="white" stroke-width="2"/>
    <rect x="20" y="48" width="20" height="4" rx="2" fill="white" fill-opacity="0.7"/>
  </svg>`;
}

// Função para renderizar projetos (Requisito 3: função + Requisito 2: for)
function renderizarProjetos(lista) {
  const grid = document.querySelector('.projetos-grid');
  if (!grid) return;

  grid.innerHTML = '';

  for (let i = 0; i < lista.length; i++) {
    const projeto = lista[i];


    let tagsHTML = '';
    for (let j = 0; j < projeto.tags.length; j++) {
      tagsHTML += `<span class="tag ${projeto.tags[j].cor}">${projeto.tags[j].texto}</span>`;
    }

    const card = document.createElement('div');
    card.className = 'projeto-card';
    card.dataset.index = projeto.id;
    card.dataset.categoria = projeto.categoria;

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
    `;

    grid.appendChild(card);
  }

  staggerGrid('.projeto-card');
  aplicarReveal();
}

// Função para renderizar habilidades (Requisito 3: função + Requisito 2: for)
function renderizarHabilidades() {
  const grid = document.querySelector('.skills-grid');
  if (!grid) return;

  grid.innerHTML = '';

  for (let i = 0; i < habilidades.length; i++) {
    const habilidade = habilidades[i];

    const card = document.createElement('div');
    card.className = 'skill-card';

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
    `;

    grid.appendChild(card);
  }

  observarBarras();
  staggerGrid('.skill-card');
}

// Função para renderizar cursos (Requisito 3: função + Requisito 2: for)
function renderizarCursos() {
  const lista = document.querySelector('.cursos-list');
  if (!lista) return;

  lista.innerHTML = '';

  for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];

    const card = document.createElement('div');
    card.className = 'curso-card';

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
    `;

    lista.appendChild(card);
  }

  staggerGrid('.curso-card');
}

/* 
   FILTRO DE PROJETOS
   (Requisito 1: estrutura de decisão if/else + Requisito 3: função)
 */
function filtrarProjetos(categoria) {
  if (categoria === 'todos') {
    renderizarProjetos(projetos);
  } else {
    const filtrados = projetos.filter(p => p.categoria === categoria);

    if (filtrados.length === 0) {
      const grid = document.querySelector('.projetos-grid');
      grid.innerHTML = '<p class="sem-resultados">Nenhum projeto encontrado nesta categoria.</p>';
    } else {
      renderizarProjetos(filtrados);
    }
  }

  const botoes = document.querySelectorAll('.filtro-btn');
  for (let i = 0; i < botoes.length; i++) {
    if (botoes[i].dataset.categoria === categoria) {
      botoes[i].classList.add('ativo');
    } else {
      botoes[i].classList.remove('ativo');
    }
  }
}

// Função para injetar os botões de filtro no HTML
function criarBotoesFiltro() {
  const projetosContainer = document.querySelector('#projetos .container');
  if (!projetosContainer) return;

  const categorias = [
    { valor: 'todos', texto: 'Todos' },
    { valor: 'web', texto: 'Web' },
    { valor: 'dados', texto: 'Dados' }
  ];

  const wrapFiltros = document.createElement('div');
  wrapFiltros.className = 'filtros-wrap';

  // Requisito 2: for para gerar os botões
  for (let i = 0; i < categorias.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'filtro-btn' + (i === 0 ? ' ativo' : '');
    btn.dataset.categoria = categorias[i].valor;
    btn.textContent = categorias[i].texto;
    btn.addEventListener('click', () => filtrarProjetos(categorias[i].valor));
    wrapFiltros.appendChild(btn);
  }

  const grid = document.querySelector('.projetos-grid');
  projetosContainer.insertBefore(wrapFiltros, grid);
}

/* 
   SAUDAÇÕES
 */
function setGreeting() {
  const hour = new Date().getHours();
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  let text = '';

  // Requisito 1: estrutura de decisão (if / else if / else)
  if (hour >= 5 && hour < 12) {
    text = 'Bom dia! ';
  } else if (hour >= 12 && hour < 18) {
    text = 'Boa tarde! ';
  } else {
    text = 'Boa noite! ';
  }

  greetingEl.textContent = text;
}

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

function aplicarReveal() {
  const revealEls = document.querySelectorAll(
    '.sobre-grid, .projeto-card, .skill-card, .timeline-item, .curso-card, .section-title, .section-label'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));
}

function staggerGrid(gridSelector) {
  const cards = document.querySelectorAll(gridSelector);
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
}

function observarBarras() {
  const skillFills = document.querySelectorAll('.skill-fill');

  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => barObserver.observe(fill));
}

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => {
        item.style.color = '';
        item.style.fontWeight = '';
      });
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) {
        active.style.color = 'var(--primary)';
        active.style.fontWeight = '600';
      }
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));

/*
   INICIALIZAÇÃO
*/
setGreeting();
renderizarProjetos(projetos);   // Renderiza projetos a partir do array
renderizarHabilidades();         // Renderiza habilidades a partir do array
renderizarCursos();              // Renderiza cursos a partir do array
criarBotoesFiltro();             // Cria botões de filtro por categoria
staggerGrid('.projeto-card');
staggerGrid('.skill-card');
staggerGrid('.timeline-item');
staggerGrid('.curso-card');
aplicarReveal();
observarBarras();
