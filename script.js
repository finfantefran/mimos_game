document.getElementById('no-button').addEventListener('mouseover', function () {
    const button = document.getElementById('no-button');
    const maxX = 200;
    const maxY = 200;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.addEventListener('touchstart', moveButton);
});
