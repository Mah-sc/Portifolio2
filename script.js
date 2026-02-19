/* SCROLL SUAVE (APENAS ÂNCORAS #) */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Só aplica scroll suave se for âncora interna
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const alvo = document.querySelector(href);
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});


/* MENU LATERAL DE PROJETOS */
function abrirDescricao(id) {
  const descricao = document.getElementById("descricao");
  if (!descricao) return;

  descricao.classList.add("ativo");

  const projetos = {
    2: {
      titulo: "SoundPulse",
      texto: "Este projeto teve como principal objetivo o desenvolvimento de um site sobre música utilizando Flexbox. Foi um trabalho em grupo com cinco integrantes, no qual fiquei responsável pela página inicial (Home) e pelas seções dedicadas aos artistas Eminem e Queen. Para o desenvolvimento do site, foram utilizados HTML e CSS.",
      link: "https://mah-sc.github.io/SoundPulse/"
    },
    4: {
      titulo: "Sweet Pudding",
      texto: "Este foi um projeto mais extenso, cujo objetivo era desenvolver um site sobre pudim. Inicialmente, fiquei responsável pela criação da logo. Em seguida, desenvolvi os protótipos do site e do aplicativo, e por fim participei da programação do projeto.",
      link: "https://mah-sc.github.io/Sweet-pudding/"
    },
    5: {
      titulo: "Celeste Hotel",
      texto: "Neste projeto, o objetivo foi criar o protótipo de um aplicativo de livre escolha, utilizando o Figma para o desenvolvimento do design e da interface.",
      link: "https://www.figma.com/proto/rBYMteP5dmyV9yDpwbFhyu/Untitled"
    },
    7: {
      titulo: "Castelena",
      texto: "Este site foi desenvolvido em dupla, com o objetivo de criar uma tela de cadastro utilizando integração com banco de dados.",
      link: "https://mah-sc.github.io/Castelena/"
    },
    8: {
      titulo: "Imaginação Criativa",
      texto: "Este projeto foi desenvolvido em um grupo de dez pessoas e teve como objetivo a criação de um protótipo de site com o tema “Imaginação Criativa”. Eu fiquei responsável pela parte do Desing.",
      link: "https://www.figma.com/proto/MGMhWdrTjBO7I4WvxRxTkA/Untitled"
    },
    9: {
      titulo: "Amor Açucarado",
      texto: "Este projeto foi desenvolvido em trio e teve como objetivo a criação de uma Visual Novel. Fiquei responsável pelo design dos personagens e pela escrita de algumas falas presentes no jogo. O projeto foi desenvolvido utilizando o Figma.",
      link: "https://www.figma.com/proto/MbnceNa4Le7R6kE2bVfhW2/Untitled"
    }
  };

  if (projetos[id]) {
    document.getElementById("titulo-projeto").innerText = projetos[id].titulo;
    document.getElementById("texto-projeto").innerText = projetos[id].texto;
    document.getElementById("link-projeto").href = projetos[id].link;
  }
}

function fecharDescricao() {
  const descricao = document.getElementById("descricao");
  if (descricao) {
    descricao.classList.remove("ativo");
  }
}


/* MODAL DE IMAGENS */
function abrirModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imgModal");

  if (!modal || !modalImg) return;

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function fecharModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  }
}