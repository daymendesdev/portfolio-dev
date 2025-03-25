window.addEventListener('load', () => {
    const containerApresentacao = document.querySelector('.container-apresentacao');
    containerApresentacao.classList.add('animated');
});

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (event) => {
    alert('Você será redirecionado para o projeto!');
  });
});
