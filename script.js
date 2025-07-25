// File: ./script.js

// Importa os dados dos projetos. Este import precisa estar fora do DOMContentLoaded
// para que 'projetosData' esteja disponível quando a função for chamada.
import projetosData from './dados.js';

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica dos Projetos (Movida para dentro do DOMContentLoaded) ---
    const projetosGrid = document.querySelector('.projetos-grid');

    if (projetosGrid) { // Garante que o elemento existe antes de tentar manipulá-lo
        projetosData.forEach(projeto => {
            const projetoCard = document.createElement('div');
            projetoCard.classList.add('projeto-card');

            let linksHTML = '';
            // Ajustado para não envolver cada link em uma tag <p>
            if (projeto.pagina && projeto.pagina !== "NÃO TEM") { // Verifica se 'pagina' existe e não é "NÃO TEM"
                linksHTML += `<a href="${projeto.pagina}" target="_blank">Ver Página</a>`;
            }
            if (projeto.repositorioFrontend && projeto.repositorioFrontend !== "NÃO TEM") {
                linksHTML += `<a href="${projeto.repositorioFrontend}" target="_blank">Frontend</a>`;
            }
            // Lógica para Backend: prioriza repositorioBackend, senão usa Alternativo
            if (projeto.repositorioBackend && projeto.repositorioBackend !== "NÃO TEM") {
                linksHTML += `<a href="${projeto.repositorioBackend}" target="_blank">Backend</a>`;
            } else if (projeto.repositorioBackendAlternativo && projeto.repositorioBackendAlternativo !== "NÃO TEM") {
                linksHTML += `<a href="${projeto.repositorioBackendAlternativo}" target="_blank">Backend (Alternativo)</a>`;
            }

            projetoCard.innerHTML = `
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <p><strong>Tecnologias Frontend:</strong> ${projeto.tecnologiaFrontend}</p>
                ${projeto.tecnologiaBackend && projeto.tecnologiaBackend !== "NÃO TEM" ? `<p><strong>Tecnologias Backend:</strong> ${projeto.tecnologiaBackend}</p>` : ''}
                ${projeto.tecnologiaBackendAlternativo && projeto.tecnologiaBackendAlternativo !== "NÃO TEM" ? `<p><strong>Tecnologias Backend (Alternativo):</strong> ${projeto.tecnologiaBackendAlternativo}</p>` : ''}
                <div class="projeto-links">
                    ${linksHTML}
                </div>
            `;
            projetosGrid.appendChild(projetoCard);
        });
    } else {
        console.error("Elemento '.projetos-grid' não encontrado.");
    }

    // --- Lógica da carta de apresentação "Leia Mais" ---
    const btnLeiaMais = document.getElementById('btn-leia-mais');
    const cartaCompleta = document.getElementById('carta-completa');
  
    if (btnLeiaMais && cartaCompleta) {
      btnLeiaMais.addEventListener('click', function() {
        cartaCompleta.classList.toggle('visivel');
        if (cartaCompleta.classList.contains('visivel')) {
          btnLeiaMais.textContent = 'Recolher Carta de Apresentação'; // Alterado para o texto original
          btnLeiaMais.classList.add('ativo');
        } else {
          btnLeiaMais.textContent = 'Leia a Carta de Apresentação';
          btnLeiaMais.classList.remove('ativo');
        }
      });
    } else {
      console.error("Elemento 'btn-leia-mais' ou 'carta-completa' não encontrado.");
    }

    // --- Código do Menu Hambúrguer ---
    const btnHamburguer = document.getElementById('menu-hamburguer');
    const navbar = document.getElementById('navbar');

    if (btnHamburguer && navbar) {
        btnHamburguer.addEventListener('click', function() {
            navbar.classList.toggle('ativo');
            btnHamburguer.classList.toggle('ativo');
            const menuAberto = navbar.classList.contains('ativo');
            btnHamburguer.setAttribute('aria-expanded', menuAberto);
        });

        // Opcional: Fechar o menu ao clicar em um link (bom para SPAs ou páginas longas)
        const linksDoMenu = navbar.querySelectorAll('ul li a');
        linksDoMenu.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && navbar.classList.contains('ativo')) { // Verifica se em mobile e menu ativo
                    navbar.classList.remove('ativo');
                    btnHamburguer.classList.remove('ativo');
                    btnHamburguer.setAttribute('aria-expanded', 'false');
                }
            });
        });
    } else {
        console.error("Elemento 'menu-hamburguer' ou 'navbar' não encontrado.");
    }

    // --- Lógica de alternância de tema (Adicionada) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Aplica o tema salvo ou o padrão do sistema
    if (currentTheme) {
        body.classList.add(currentTheme);
        updateThemeToggleIcon(currentTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateThemeToggleIcon('dark-mode');
    } else {
        body.classList.add('light-mode'); // Adiciona explicitamente 'light-mode' como padrão
        localStorage.setItem('theme', 'light-mode');
        updateThemeToggleIcon('light-mode');
    }

    // Função para atualizar o ícone do botão
    function updateThemeToggleIcon(theme) {
        if (theme === 'dark-mode') {
            themeToggleBtn.innerHTML = '☀️';
        } else {
            themeToggleBtn.innerHTML = '🌙';
        }
    }

    // Event listener para o botão de alternância de tema
    if (themeToggleBtn) { // Garante que o botão de tema existe
        themeToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
                updateThemeToggleIcon('light-mode');
            } else {
                body.classList.remove('light-mode'); // Remove light-mode antes de adicionar dark-mode
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                updateThemeToggleIcon('dark-mode');
            }
        });
    } else {
        console.error("Elemento 'theme-toggle' não encontrado.");
    }

}); // Fim do DOMContentLoaded listener