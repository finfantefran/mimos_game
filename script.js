
function moveButton() {
    const button = document.getElementById('no-button');
    const maxX = 100;
    const maxY = 100;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}


const noButton = document.getElementById('no-button');
noButton.addEventListener('mouseover', moveButton); 
noButton.addEventListener('touchstart', moveButton); 


document.getElementById('yes-button').addEventListener('click', function() {
    document.querySelector('h1').textContent = 'No eres un toxo';
});
