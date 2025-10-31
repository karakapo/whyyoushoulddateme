// Windows XP Yükleme Ekranı JavaScript

// Sayfa yüklendiğinde loading bar'ı başlat
setTimeout(() => {
    document.getElementById('loadingBar').classList.add('active');
}, 200);

// 3.5 saniye sonra bir sonraki sayfaya geç
setTimeout(() => {
    window.location.href = 'nedenben.html';
}, 3500);
