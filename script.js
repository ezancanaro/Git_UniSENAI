document.addEventListener('DOMContentLoaded', () => {

    // --- Animação 2: Disparada por Evento de Clique ---
    const animateButton = document.getElementById('animateButton');
    const animatedText = document.getElementById('animatedText');

    animateButton.addEventListener('click', () => {
        // Remove a classe para poder animar novamente, se necessário
        animatedText.classList.remove('slide-in-animation');

        // Adiciona um pequeno delay para garantir que a remoção da classe seja processada
        // antes de adicioná-la novamente.
        setTimeout(() => {
            animatedText.classList.add('slide-in-animation');
        }, 10);
    });


    // --- Animação 3: Seguidor do Cursor via JavaScript ---
    const cursorFollower = document.getElementById('cursor-follower');

    // Move o elemento para a posição do mouse
    document.addEventListener('mousemove', (event) => {
        // event.clientX e event.clientY dão as coordenadas X e Y do mouse
        cursorFollower.style.left = `${event.clientX}px`;
        cursorFollower.style.top = `${event.clientY}px`;
    });

    // Efeito opcional: aumenta o tamanho do seguidor ao clicar
    document.addEventListener('mousedown', () => {
        cursorFollower.style.width = '30px';
        cursorFollower.style.height = '30px';
    });
    
    document.addEventListener('mouseup', () => {
        cursorFollower.style.width = '20px';
        cursorFollower.style.height = '20px';
    });

});