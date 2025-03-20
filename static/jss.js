function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    heart.innerHTML = '🩷';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


setInterval(createHeart, 300);


const iframe = document.getElementById('spotify-embed');
let isPlaying = false;

iframe.addEventListener('load', () => {
    const iframeWindow = iframe.contentWindow;
    iframeWindow.postMessage({ command: 'getState' }, '*');

    window.addEventListener('message', (event) => {
        if (event.origin !== 'https://open.spotify.com') return;
        const data = event.data;
        if (data.type === 'playback_update') {
            isPlaying = data.isPlaying;
            console.log(isPlaying ? 'เพลงกำลังเล่น' : 'เพลงหยุดเล่น');
        }
    });
});