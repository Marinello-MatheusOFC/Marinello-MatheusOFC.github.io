const imagens = document.querySelectorAll('.container img, .container2 img');

    imagens.forEach(img => {
      img.addEventListener('click', () => {
        const container = img.parentElement;
        const mensagemBox = container.querySelector('.mensagem');
        const texto = img.getAttribute('data-msg');

        // Esconde todas as outras mensagens
        document.querySelectorAll('.mensagem').forEach(m => {
          m.style.display = 'none';
          m.classList.remove('fade-in', 'fade-out');
        });

        // Mostra a nova mensagem com fade-in
        mensagemBox.textContent = texto;
        mensagemBox.style.display = 'block';
        setTimeout(() => {
          mensagemBox.classList.add('fade-in');
        }, 10); // pequeno delay para ativar transição

        // Aplica fade-out após 5 segundos
        setTimeout(() => {
          mensagemBox.classList.remove('fade-in');
          mensagemBox.classList.add('fade-out');
          setTimeout(() => {
            mensagemBox.style.display = 'none';
            mensagemBox.classList.remove('fade-out');
          }, 1000); // tempo da transição de saída
        }, 5000);
      });
    });