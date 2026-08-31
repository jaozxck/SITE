document.addEventListener('DOMContentLoaded', () => {
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnDiminuir = document.getElementById('btn-diminuir');
    const btnContraste = document.getElementById('btn-contraste');

    // Recupera a preferência salva no navegador
    let tamanhoFonte = parseInt(localStorage.getItem('tamanhoFonte')) || 100;
    let altoContraste = localStorage.getItem('altoContraste') === 'true';

    // Aplica o estado salvo
    document.documentElement.style.fontSize = tamanhoFonte + '%';
    if (altoContraste) {
        document.body.classList.add('alto-contraste');
    }

    // Botão Aumentar Fonte
    btnAumentar.addEventListener('click', () => {
        if (tamanhoFonte < 140) {
            tamanhoFonte += 10;
            document.documentElement.style.fontSize = tamanhoFonte + '%';
            localStorage.setItem('tamanhoFonte', tamanhoFonte);
        }
    });

    // Botão Diminuir Fonte
    btnDiminuir.addEventListener('click', () => {
        if (tamanhoFonte > 90) {
            tamanhoFonte -= 10;
            document.documentElement.style.fontSize = tamanhoFonte + '%';
            localStorage.setItem('tamanhoFonte', tamanhoFonte);
        }
    });

    // Botão Alto Contraste
    btnContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
        const ativo = document.body.classList.contains('alto-contraste');
        localStorage.setItem('altoContraste', ativo);
    });
});