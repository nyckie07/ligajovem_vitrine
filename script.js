// Dados dos itens
const portfolioItems = {
  projeto1: {
    image: 'images/engrenagem.jpg',
    image1: 'images/engrenagem.jpg',
    
    title: 'Dashboard do Sistema',
    description: ' 🔩 Sobre o Projeto –cisão, roscas e acabamento superficial. Todas as partes do canhão foram confeccionadas com o uso de máquinas-ferramenta, como torno mecânico, fresadora e furadeira de bancada.  Durante o desenvolvimento, os alunos trabalharam conceitos como:  Leitura e interpretação de desenho técnico;  Medição e controle dimensional com instrumentos de precisão;  Segurança na operação de máquinas;  Montagem e testes funcionais do protótipo.  Além do aspecto técnico, o projeto também visa estimular a criatividade, o trabalho em equipe e a valorização do conhecimento histórico, promovendo uma aprendizagem completa, conectada ao mundo real.',
    views: 17,
    projectUrl: 'external/dashboard.html'
  },
  projeto2: {
    image: 'images/dashboard.jpg',
    title: 'Dashboard do Sistema',
    description: ' 🔩 Sobre o Projeto – Canhão Usinado  Este projeto apresenta a reprodução em miniatura de um canhão histórico, desenvolvida no setor de usinagem mecânica como parte de uma atividade prática voltada ao aprendizado de técnicas de fabricação.  A proposta tem como objetivo unir história e engenharia, demonstrando na prática o processo de usinagem de peças cilíndricas, encaixes de precisão, roscas e acabamento superficial. Todas as partes do canhão foram confeccionadas com o uso de máquinas-ferramenta, como torno mecânico, fresadora e furadeira de bancada.  Durante o desenvolvimento, os alunos trabalharam conceitos como:  Leitura e interpretação de desenho técnico;  Medição e controle dimensional com instrumentos de precisão;  Segurança na operação de máquinas;  Montagem e testes funcionais do protótipo.  Além do aspecto técnico, o projeto também visa estimular a criatividade, o trabalho em equipe e a valorização do conhecimento histórico, promovendo uma aprendizagem completa, conectada ao mundo real.',
    views: 17,
    projectUrl: 'external/canhao/canhao.html'
  },
  projeto3: {
    image: 'images/reports.jpg',
    title: 'Módulo de Relatórios',
    description: 'Gere análises detalhadas com filtros avançados e exportação para múltiplos formatos. Integração com Excel e PDF.',
    views: 12,
    projectUrl: 'external/silo/silo.html'
  },
  projeto4: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto5: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto6: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto7: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto8: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  },
   projeto9: {
    image: 'images/mobile.jpg',
    title: 'Versão Mobile',
    description: 'Aplicativo otimizado para dispositivos móveis com funcionalidades offline e sincronização em segundo plano.',
    views: 8,
    projectUrl: 'projetos/mobile.html'
  }
};

// Abre o pop-up
function openContentPopup(itemId) {
  const item = portfolioItems[itemId];
  if (!item) return;

  // Atualiza o conteúdo
  document.getElementById('popupTitle').textContent = item.title;
  document.getElementById('popupImage').src = item.image;
  document.getElementById('popupImage').alt = item.title;
  document.getElementById('itemDescription').textContent = item.description;
  document.getElementById('itemViews').textContent = `${item.views} visualizações`;
  document.getElementById('projectFrame').src = item.projectUrl;
  document.getElementById('shareLink').value = `${window.location.origin}${window.location.pathname}#?item=${itemId}`;

  // Mostra o pop-up
  document.getElementById('contentPopup').style.display = 'block';
}

// Fecha o pop-up
function closePopup() {
  document.getElementById('contentPopup').style.display = 'none';
}

// Alterna entre conteúdos
document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Ativa o botão clicado
    document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Mostra o conteúdo correspondente
    const contentId = `${this.dataset.content}-content`;
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
  });
});

// Copia o link
function copyLink() {
  const linkInput = document.getElementById('shareLink');
  linkInput.select();
  document.execCommand('copy');
  
  // Feedback visual
  const copyBtn = linkInput.nextElementSibling;
  const originalHTML = copyBtn.innerHTML;
  copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
  setTimeout(() => {
    copyBtn.innerHTML = originalHTML;
  }, 2000);
}

// Configura eventos das miniaturas
document.querySelectorAll('.screenshot').forEach(item => {
  item.addEventListener('click', function() {
    const itemId = this.getAttribute('data-item');
    openContentPopup(itemId);
  });
});

// Fecha ao clicar fora
window.addEventListener('click', (e) => {
  if (e.target === document.getElementById('contentPopup')) {
    closePopup();
  }
});
// Função para recarregar o iframe
function reloadProject() {
  const iframe = document.getElementById('projectFrame');
  iframe.src = iframe.src; // Recarrega o iframe
}

// Função para abrir em tela cheia
function openProjectFullscreen() {
  const iframe = document.getElementById('projectFrame');
  
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) { /* Safari */
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) { /* IE11 */
    iframe.msRequestFullscreen();
  }
}

// Ajusta dinamicamente a altura do popup-body
function adjustPopupHeight() {
  const popupBody = document.querySelector('.popup-body');
  const windowHeight = window.innerHeight;
  
  // Calcula 70% da altura da janela, menos o espaço dos outros elementos
  const calculatedHeight = Math.min(Math.max(windowHeight * 0.7, 400), 700);
  popupBody.style.height = `${calculatedHeight}px`;
}

// Chamar na abertura do popup e no redimensionamento
window.addEventListener('resize', adjustPopupHeight);

// No seu openContentPopup(), adicione:
adjustPopupHeight();
// Variável para controlar se o projeto já foi carregado
let projectLoaded = false;
let currentProjectUrl = '';

// Modifique a função de alternância de conteúdo
document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const contentType = this.dataset.content;
    
    // Ativa o botão clicado
    document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Oculta todos os conteúdos
    document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
    
    // Mostra o conteúdo correspondente
    document.getElementById(`${contentType}-content`).classList.add('active');
    
    // Se for projeto e ainda não foi carregado
    if (contentType === 'project' && !projectLoaded && currentProjectUrl) {
      loadProject(currentProjectUrl);
    }
  });
});

// Função para carregar o projeto
function loadProject(url) {
  const loadingElement = document.querySelector('.project-loading');
  const viewerElement = document.querySelector('.project-viewer');
  const iframe = document.getElementById('projectFrame');
  
  loadingElement.style.display = 'flex';
  viewerElement.style.display = 'none';
  
  iframe.src = url;
  
  // Quando o iframe carregar
  iframe.onload = function() {
    loadingElement.style.display = 'none';
    viewerElement.style.display = 'block';
    projectLoaded = true;
  };
}

// Modifique a função openContentPopup
function openContentPopup(itemId) {
  const item = portfolioItems[itemId];
  if (!item) return;

  // Reseta o estado do projeto
  projectLoaded = false;
  currentProjectUrl = item.projectUrl;
  
  // Atualiza o conteúdo
  document.getElementById('popupTitle').textContent = item.title;
  document.getElementById('popupImage').src = item.image;
  document.getElementById('popupImage').alt = item.title;
  document.getElementById('itemDescription').textContent = item.description;
  document.getElementById('itemViews').textContent = `${item.views} visualizações`;
  
  // Mostra a imagem por padrão
  document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
  document.getElementById('image-content').classList.add('active');
  document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('[data-content="image"]').classList.add('active');
  
  // Exibe o pop-up
  document.getElementById('contentPopup').style.display = 'block';
}

// Funções auxiliares permanecem as mesmas
function reloadProject() {
  const iframe = document.getElementById('projectFrame');
  iframe.src = iframe.src;
  document.querySelector('.project-loading').style.display = 'flex';
  document.querySelector('.project-viewer').style.display = 'none';
}

function openProjectFullscreen() {
  const iframe = document.getElementById('projectFrame');
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}
// Função para ajustar responsividade
function handleResponsive() {
  const popupBody = document.querySelector('.popup-body');
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Ajustes específicos para mobile
    popupBody.style.maxHeight = '60vh';
    document.querySelectorAll('.switch-btn').forEach(btn => {
      btn.style.flex = '1 1 30%';
    });
  } else {
    // Ajustes para desktop/tablet
    popupBody.style.maxHeight = '70vh';
  }
  
  // Ajuste especial para iframe em telas pequenas
  const projectContent = document.getElementById('project-content');
  if (projectContent.classList.contains('active')) {
    adjustProjectViewer();
  }
}

// Função para ajustar o visualizador de projeto
function adjustProjectViewer() {
  const isMobile = window.innerWidth <= 768;
  const viewer = document.querySelector('.project-viewer');
  
  if (isMobile) {
    viewer.style.paddingBottom = '75%'; // Proporção 4:3 para mobile
  } else {
    viewer.style.paddingBottom = '56.25%'; // Proporção 16:9 para desktop
  }
}

// Modifique a função initialize() para incluir:
function initialize() {
  // ... outros event listeners ...
  
  // Evento para redimensionamento
  window.addEventListener('resize', () => {
    handleResponsive();
    adjustPopupHeight();
  });
  
  // Chamada inicial
  handleResponsive();
}
// Função para alternar o menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('active');
  
  // Animação do ícone
  const btn = document.querySelector('.mobile-menu-btn');
  if (menu.classList.contains('active')) {
    btn.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    btn.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

// Fechar menu ao clicar em um item (opcional)
document.querySelectorAll('.navbar-menu a').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      toggleMobileMenu();
    }
  });
});

// Fechar menu ao redimensionar para desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    const menu = document.getElementById('navbarMenu');
    menu.classList.remove('active');
    document.querySelector('.mobile-menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
  }
});



