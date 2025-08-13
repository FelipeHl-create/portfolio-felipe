// Aguarda o conteúdo do DOM ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE DIGITAÇÃO ---
    const elementH1 = document.querySelector('#inicio h1');
    const text = "Olá, eu sou Felipe Hidalgo";
    const interval = 100;

    if (elementH1) {
        function showText(element, text, interval) {
            const char = text.split("").reverse();
            const typer = setInterval(() => {
                if (!char.length) {
                    element.style.animation = 'blink-caret .75s step-end infinite';
                    return clearInterval(typer);
                }
                const next = char.pop();
                element.innerHTML += next;
            }, interval);
        }
        showText(elementH1, text, interval);
    }

    // --- CONTROLES DA JANELA MODAL DE CÓDIGO ---
    const codeModal = document.getElementById('code-modal');
    const openModalBtn = document.getElementById('open-code-modal');
    const closeModalBtn = document.querySelector('.modal-close');

    if (codeModal && openModalBtn && closeModalBtn) {
        openModalBtn.onclick = function() {
          codeModal.style.display = 'block';
        }

        closeModalBtn.onclick = function() {
          codeModal.style.display = 'none';
        }

        window.onclick = function(event) {
          if (event.target == codeModal) {
            codeModal.style.display = 'none';
          }
        }
    }

});