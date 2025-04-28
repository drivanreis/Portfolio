const projetosData = [
    {
        nome: "AmberView",
        descricao: "Site publicitario, falando sobre a empresa, serviços e produtos, e formas de contato.",
        pagina: "https://amberview.shop/",
        repositorioFrontend: "https://github.com/drivanreis/AmberView",
        tecnologiaFrontend: "HTML5, CSS3 E JavaScript",
        repositorioBackend: "NÃO TEM",
        tecnologiaBackend: "NÃO TEM",
        repositorioBackendAlternativo: "NÃO TEM",
        tecnologiaBackendAlternativo: "NÃO TEM"
    },
    {
        nome: "Galeria de Fotos",
        descricao: "Site para armazenar fotos",
        pagina: "https://www.ivanreisdev.shop/",
        repositorioFrontend: "https://github.com/drivanreis/galeria-de-fotos-frontend",
        tecnologiaFrontend: "React + Vite",
        repositorioBackend: "https://github.com/drivanreis/galeria-de-fotos-back-node",
        tecnologiaBackend: "Node.js, Express.js, Docker",
        repositorioBackendAlternativo: "https://github.com/drivanreis/galeria-de-fotos-back-phyton",
        tecnologiaBackendAlternativo: "Python + Flask"
    },
    {
        nome: "Meus Torrents",
        descricao: "Site para armazenar Capas e Links de filmes que mais gostei.",
        pagina: "https://drivanreis.github.io/meustorrent/",
        repositorioFrontend: "https://github.com/drivanreis/meustorrent",
        tecnologiaFrontend: "HTML5, CSS3 E JavaScript",
        repositorioBackend: "NÃO TEM",
        tecnologiaBackend: "NÃO TEM",
        repositorioBackendAlternativo: "NÃO TEM",
        tecnologiaBackendAlternativo: "NÃO TEM"
    },
    {
        nome: "RIGs para Mineração",
        descricao: "Site OutDoor para divugação de produtos",
        pagina: "https://drivanreis.github.io/siterig/",
        repositorioFrontend: "https://github.com/drivanreis/siterig",
        tecnologiaFrontend: "HTML5, CSS3 E JavaScript",
        repositorioBackend: "NÃO TEM",
        tecnologiaBackend: "NÃO TEM",
        repositorioBackendAlternativo: "NÃO TEM",
        tecnologiaBackendAlternativo: "NÃO TEM"
    },
    {
        nome: "Confeitaria",
        descricao: "Site OutDoor para divugação de produtos",
        pagina: "https://drivanreis.github.io/confeitaria/",
        repositorioFrontend: "https://github.com/drivanreis/confeitaria",
        tecnologiaFrontend: "HTML5, CSS3 E JavaScript",
        repositorioBackend: "NÃO TEM",
        tecnologiaBackend: "NÃO TEM",
        repositorioBackendAlternativo: "NÃO TEM",
        tecnologiaBackendAlternativo: "NÃO TEM"
    }
];

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