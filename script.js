function mostrarInfo() {
    alert("Os ovos de granja são ricos em proteínas, vitaminas e minerais essenciais.");
  }
  
  function mostrarBeneficios() {
    alert("Benefícios: preço acessível, segurança alimentar, alto valor nutricional.");
  }
  
  function compartilhar() {
    alert("Compartilhe este conteúdo com seus amigos!");
  }
  
  function atirarBomba() {
    const area = document.querySelector('.pintinho-atirador');
    const bomba = document.createElement('div');
    bomba.classList.add('bomba');
    area.appendChild(bomba);
  
    bomba.addEventListener('animationend', () => {
      bomba.remove();
    });
  }
  