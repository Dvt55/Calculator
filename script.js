(function () {
    "use strict";

    const resultado = document.querySelector('.minha-calculadora__resultado');
    const botoes = document.querySelectorAll(".minha-calculadora__botao");

    const teclasExec = { Enter: '=', c: 'C' };

    function executar(valor) {
        const valores = resultado.value;

        if (valor === '=') valor = String(eval(valores.replace(',', '.'))).replace('.', ',');
        else if (valor.toUpperCase() === 'C') valor = '';
        else valor = valores + valor;

        resultado.value = valor || '';
    }

    function lidarComBotao({ target }) {
        executar(target.innerText);
    }

    function lidarComTeclas(evento) {
        if (/(\b[0-9]\b)|[\*\+\-\/\=\,]/.test(evento.key)) {
            executar(evento.key);
        } else if (teclasExec[evento.key]) {
            executar(teclasExec[evento.key]);
        } else if (evento.key === 'Backspace' || evento.key.startsWith('Arrow')) {
            return;
        }

        evento.preventDefault();
    }

    botoes.forEach(botao => botao.addEventListener('click', lidarComBotao));
    resultado.addEventListener('keydown', lidarComTeclas);
})();
