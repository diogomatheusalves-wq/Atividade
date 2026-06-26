const shineButton = document.getElementById('shineButton');

shineButton.addEventListener('click', () => {
  shineButton.classList.add('glow');
  shineButton.textContent = 'Brilho ativado!';

  setTimeout(() => {
    shineButton.classList.remove('glow');
    shineButton.textContent = 'Ativar brilho';
  }, 1500);
});
