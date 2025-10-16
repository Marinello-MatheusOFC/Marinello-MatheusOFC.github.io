function pararTodasAsMusicas() {
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

function tocarMusica() {
    pararTodasAsMusicas();
    const audio = document.getElementById("musica1");
    audio.currentTime = 0;
    audio.play().catch(() => {
        alert("Amo S2");
    });
    setTimeout(() => {
        audio.pause();
    }, 300000); 
}

function MsgTexto() {
    const mensagem = document.getElementById("mensagemEspecial");
    mensagem.style.display = "block";
    pararTodasAsMusicas();
    const audio = document.getElementById("musica2");
    audio.currentTime = 0;
    audio.play().catch(() => {
    });
    setTimeout(() => {
        audio.pause();
    }, 300000); 
}

function TempoDeAmor() {
    const mensagemTempo = document.getElementById("mensagemTempo");
    const dataInicio = new Date("2024-02-01T19:24:00");
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    mensagemTempo.innerHTML = `
        Semprei quis conversar com você desde a Etec do dia que te vi pela primeira vez, mas comecei a AMAR UM MONTÃO TIPO UM MONTÃO PRA CARALHO, DA NEM PRA TI FALAR, MUITO MAIOR QUE EU quando começamo a se falar ou pra ficar melhor pra minha linda pessoianha:  <strong>${dias}</strong> dias, <strong>${horas}</strong> horas e <strong>${minutos}</strong> minutos! 💘
    `;
    mensagemTempo.style.display = "block";

    const mensagem = document.getElementById("mensagemEspecial");
    mensagem.style.display = "block";

    pararTodasAsMusicas();
    const audio = document.getElementById("musica3");
    audio.currentTime = 0;
    audio.play().catch(() => {
        alert("AMO MAIS AINDA");
    });
    setTimeout(() => {
        audio.pause();
    }, 300000); 
}