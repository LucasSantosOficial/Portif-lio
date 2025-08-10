//PARA TROCAR O FUNDO AO CLICAR NO BOTÃO
//Não esquecer de chamar a função ao final do HTML e adicionar no botão a função

function apagarAcender() {
  const html = document.documentElement;

  //   if(html.classList.contains("light")){
  //   html.classList.remove("light")
  //   } else {
  //   html.classList.add("ligth")
  //   }
  html.classList.toggle("ligth");

  //PARA TROCAR A IMAGEM

  //pegar a tag img
  const img = document.querySelector("#profile img");
  console.log(img);
  //substituir a imagem
  if (html.classList.contains("ligth")) {
    //se tiver  light mode, adicionar a imagem light
    img.setAttribute("src", "./figma/assets/avatar.png");
    img.setAttribute(
      "alt",
      "foto do lucas sorrindo, de óculos com fundo azul escuro"
    );
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./figma/assets/avatar-light.png");
    img.setAttribute("alt", "TESTE");
    
  }
}

//function onHoverButton(text) {
  //const boxText = document.querySelector("#textoOrientacao");
  //boxText.innerHTML = text;
//}

// Dropdown Meus Projetos com <a> como toggle
(function () {
  const dd = document.querySelector('.dropdown');
  if (!dd) return;

  const toggle = dd.querySelector('#btnMeusProjetos');
  const menu   = dd.querySelector('.dropdown-menu');

  function close() {
    dd.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function open() {
    dd.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  // abre/fecha no clique
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    dd.classList.contains('open') ? close() : open();
  });

  // fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) close();
  });

  // ESC fecha
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
