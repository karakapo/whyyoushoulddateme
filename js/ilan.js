// İş İlanı Sayfası JavaScript

const rejectBtn = document.getElementById('rejectBtn');
const acceptBtn = document.getElementById('acceptBtn');
const successMessage = document.getElementById('successMessage');

let escapeCount = 0;

// Reddet butonu kaçma mekanizması
rejectBtn.addEventListener('mouseenter', function() {
    escapeCount++;
    const maxX = window.innerWidth - this.offsetWidth - 20;
    const maxY = window.innerHeight - this.offsetHeight - 20;

    this.style.position = 'fixed';
    this.style.left = Math.random() * maxX + 'px';
    this.style.top = Math.random() * maxY + 'px';
});

// Mobil için touch desteği
rejectBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    escapeCount++;
    const maxX = window.innerWidth - this.offsetWidth - 20;
    const maxY = window.innerHeight - this.offsetHeight - 20;

    this.style.position = 'fixed';
    this.style.left = Math.random() * maxX + 'px';
    this.style.top = Math.random() * maxY + 'px';
});

// Kabul butonu
acceptBtn.addEventListener('click', function() {
    successMessage.style.display = 'block';
    rejectBtn.style.display = 'none';

    // Kalpler düşsün
    createHearts();
});

// Kalp oluşturma fonksiyonu
function createHearts() {
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 3000);
        }, i * 100);
    }
}
