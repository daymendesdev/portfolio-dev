window.addEventListener('load', () => {
    setTimeout(() => {
        const containerApresentacao = document.querySelector('.container-apresentacao');
        containerApresentacao.classList.add('animated');
    }, 100);
});

document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    
    if (!mensagem) {
        alert('Por favor, preencha a mensagem.');
        return;
    }

    let mensagemFormatada = ``;
    
    if (nome) {
        mensagemFormatada += `*Nome:* ${nome}\n`;
    }
    
    if (assunto) {
        mensagemFormatada += `*Assunto:* ${assunto}\n`;
    }
    
    mensagemFormatada += `\n*Mensagem:*\n${mensagem}`;
    
    const mensagemCodificada = encodeURIComponent(mensagemFormatada);
    const urlWhatsApp = `https://wa.me/5591981945246?text=${mensagemCodificada}`;
    window.open(urlWhatsApp, '_blank');
});
