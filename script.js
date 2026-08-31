document.addEventListener('DOMContentLoaded', () => {
    const btnAumentar = document.getElementById('btn-aumentar');
    const btnDiminuir = document.getElementById('btn-diminuir');
    const btnContraste = document.getElementById('btn-contraste');

    let tamanhoFonte = parseInt(localStorage.getItem('tamanhoFonte')) || 100;
    let altoContraste = localStorage.getItem('altoContraste') === 'true';

    document.documentElement.style.fontSize = tamanhoFonte + '%';
    if (altoContraste) {
        document.body.classList.add('alto-contraste');
    }

    if (btnAumentar) {
        btnAumentar.addEventListener('click', () => {
            if (tamanhoFonte < 140) {
                tamanhoFonte += 10;
                document.documentElement.style.fontSize = tamanhoFonte + '%';
                localStorage.setItem('tamanhoFonte', tamanhoFonte);
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', () => {
            if (tamanhoFonte > 90) {
                tamanhoFonte -= 10;
                document.documentElement.style.fontSize = tamanhoFonte + '%';
                localStorage.setItem('tamanhoFonte', tamanhoFonte);
            }
        });
    }

    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste');
            const ativo = document.body.classList.contains('alto-contraste');
            localStorage.setItem('altoContraste', ativo);
        });
    }
});