document.getElementById('no-button').addEventListener('mouseover', function () {
    const button = document.getElementById('no-button');
    const maxX = 100;
    const maxY = 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
