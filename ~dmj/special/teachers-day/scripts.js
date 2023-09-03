document.getElementById('envelope').addEventListener('click', function () {
    const flap = document.getElementById('flap');
    const letter = document.getElementById('letter');
    const scene = document.getElementById('scene');

    flap.style.transform = 'rotateX(-180deg)';
    letter.style.display = 'block';
    letter.style.transform = 'translateY(0)';
    scene.classList.add('blurred-bg');
});
