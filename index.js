function runAway() {

    const noButton = document.getElementById('no-btn');
    const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
    const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';

}

document.getElementById('yes-btn').addEventListener('click', function () {
    alert('We are very happy!');
    return;
});
