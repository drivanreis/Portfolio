import projetosData from './dados.js';

const projetosGrid = document.querySelector('.projetos-grid');

projetosData.forEach(projeto => {
    const projetoCard = document.createElement('div');
    projetoCard.classList.add('projeto-card');

    let linksHTML = '';
    if (projeto.pagina !== "NÃO TEM") {
        linksHTML += `<p><a href="${projeto.pagina}" target="_blank">Ver Página</a></p>`;
    }
    if (projeto.repositorioFrontend !== "NÃO TEM") {
        linksHTML += `<p><a href="${projeto.repositorioFrontend}" target="_blank">Frontend</a></p>`;
    }
    if (projeto.repositorioBackend !== "NÃO TEM") {
        linksHTML += `<p><a href="${projeto.repositorioBackend}" target="_blank">Backend</a></p>`;
    } else if (projeto.repositorioBackendAlternativo !== "NÃO TEM") {
        linksHTML += `<p><a href="${projeto.repositorioBackendAlternativo}" target="_blank">Backend (Alternativo)</a></p>`;
    }

    projetoCard.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <p><strong>Tecnologias Frontend:</strong> ${projeto.tecnologiaFrontend}</p>
        ${projeto.tecnologiaBackend !== "NÃO TEM" ? `<p><strong>Tecnologias Backend:</strong> ${projeto.tecnologiaBackend}</p>` : ''}
        ${projeto.tecnologiaBackendAlternativo !== "NÃO TEM" ? `<p><strong>Tecnologias Backend (Alternativo):</strong> ${projeto.tecnologiaBackendAlternativo}</p>` : ''}
        <div class="projeto-links">
            ${linksHTML}
        </div>
    `;
    projetosGrid.appendChild(projetoCard);
});

// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // Pega a referência do botão e do conteúdo expansível
    const btnLeiaMais = document.getElementById('btn-leia-mais');
    const cartaCompleta = document.getElementById('carta-completa');
  
    // Verifica se ambos os elementos existem antes de adicionar o listener
    if (btnLeiaMais && cartaCompleta) {
      // Adiciona um evento de clique ao botão
      btnLeiaMais.addEventListener('click', function() {
        // Alterna a classe 'visivel' no container da carta
        cartaCompleta.classList.toggle('visivel');
  
        // Alterna o texto do botão e a classe 'ativo' para a seta (opcional)
        if (cartaCompleta.classList.contains('visivel')) {
          btnLeiaMais.textContent = 'Leia menos';
          btnLeiaMais.classList.add('ativo'); // Adiciona classe para mudar a seta
        } else {
          btnLeiaMais.textContent = 'Leia a Carta de Apresentação';
          btnLeiaMais.classList.remove('ativo'); // Remove classe para voltar a seta
        }
      });
    } else {
      console.error("Elemento 'btn-leia-mais' ou 'carta-completa' não encontrado.");
    }

    // --- Código do Menu Hambúrguer (Novo) ---
  const btnHamburguer = document.getElementById('menu-hamburguer');
  const navbar = document.getElementById('navbar');

  if (btnHamburguer && navbar) {
    btnHamburguer.addEventListener('click', function() {
      navbar.classList.toggle('ativo'); // Alterna a classe que mostra/esconde o menu no CSS
      btnHamburguer.classList.toggle('ativo'); // Alterna a classe para animar o botão (opcional)

      // Atualiza aria-expanded para acessibilidade
      const menuAberto = navbar.classList.contains('ativo');
      btnHamburguer.setAttribute('aria-expanded', menuAberto);
    });
  } else {
    console.error("Elemento 'menu-hamburguer' ou 'navbar' não encontrado.");
  }

  // Opcional: Fechar o menu ao clicar em um link (bom para SPAs ou páginas longas)
  if (navbar) {
      const linksDoMenu = navbar.querySelectorAll('ul li a');
      linksDoMenu.forEach(link => {
          link.addEventListener('click', () => {
              // Verifica se o menu hamburguer está ativo (visível)
              if (btnHamburguer && navbar.classList.contains('ativo')) {
                  navbar.classList.remove('ativo');
                  btnHamburguer.classList.remove('ativo');
                  btnHamburguer.setAttribute('aria-expanded', 'false');
              }
          });
      });
  }
  
  }); // Fim do DOMContentLoaded listener