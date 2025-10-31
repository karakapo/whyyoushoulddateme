# 💕 Çıkma Teklifi Web Sitesi

Komik, yaratıcı ve interaktif bir çıkma teklifi web sitesi. Haber sitesi parodisinden Windows XP yükleme ekranına, iş ilanı formatından kaçan red butonuna kadar birçok eğlenceli özellik içeriyor!

## 🎯 Özellikler

- 📰 **Gerçekçi Haber Sitesi** - Hacettepe Haber temalı profesyonel görünüm
- 💻 **Windows XP Yükleme** - Nostaljik loading ekranı
- 🎯 **İnteraktif "Neden Ben?"** - Tıklamalı reveal sistemi
- 💼 **İş İlanı Parodisi** - Sevgili pozisyonu başvurusu
- ❤️ **Kaçan Red Butonu** - Fareyle kaçan reddet butonu
- 🎉 **Kalpler Animasyonu** - Kabul edilince düşen kalpler
- 📱 **Tam Responsive** - Mobil ve desktop uyumlu

## 📁 Proje Yapısı

```
whyyoushouddateme/
├── index.html              # Ana sayfa (Haber sitesi)
├── xp.html                 # Windows XP ekranı
├── nedenben.html           # Neden ben sayfası
├── ilan.html               # İş ilanı sayfası
├── css/                    # Stil dosyaları
│   ├── home.css
│   ├── xp.css
│   ├── nedenben.css
│   └── ilan.css
├── js/                     # JavaScript dosyaları
│   ├── xp.js
│   ├── nedenben.js
│   └── ilan.js
└── style.css               # Ortak stiller
```

## 🚀 Hızlı Başlangıç

### Yerel Olarak Çalıştırma

1. Repoyu klonla:
```bash
git clone https://github.com/USERNAME/whyyoushouddateme.git
cd whyyoushouddateme
```

2. `index.html` dosyasını tarayıcıda aç:
```bash
open index.html
# veya
python -m http.server 8000
```

3. Tarayıcında `http://localhost:8000` adresini aç

### Vercel'e Deploy

**En Hızlı Yöntem:**
```bash
npx vercel --prod
```

Alternatif olarak:
1. https://vercel.com/new adresine git
2. Bu repoyu bağla
3. Deploy et!

Detaylı talimatlar için [DEPLOY.md](DEPLOY.md) dosyasına bak.

## 🎭 Sayfa Akışı

1. **Haber Sitesi** → Kullanıcı "SON DAKİKA" haberini görür
2. **"HABERE DEVAM ET"** butonuna tıklar
3. **Windows XP** → 3.5 saniyelik yükleme ekranı
4. **Neden Ben?** → Başlığa tıklayarak 3 nedeni keşfeder
5. **İş İlanı** → Sevgili pozisyonu detaylarını okur
6. **Kabul/Red** → Kabul eder ❤️ (veya red butonu kaçar 😄)

## 🛠 Teknolojiler

- **HTML5** - Semantik yapı
- **CSS3** - Modern animasyonlar ve responsive tasarım
- **Vanilla JavaScript** - Dependency yok, saf JS
- **Vercel** - Hosting ve deployment

## 📱 Tarayıcı Desteği

- ✅ Chrome/Edge (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Mobil tarayıcılar

## 🎨 Özelleştirme

### Metinleri Değiştirme

**nedenben.html** dosyasında kendi nedenlerini ekle:
```html
<div class="reason-box" id="reason1">
    <strong>Kendi Başlığın</strong>
    Kendi açıklaman
</div>
```

**ilan.html** dosyasında özellikleri düzenle:
```html
<li>Kendi özelliğin</li>
```

### Renkleri Değiştirme

CSS dosyalarındaki renk kodlarını değiştir:
- `#c8102e` → Kırmızı (ana renk)
- `#245edb` → Mavi (XP rengi)

## 📊 Performance

- Toplam boyut: ~41KB
- İlk yüklenme: <1 saniye
- Lighthouse skoru: 95+

## 🐛 Bilinen Sorunlar

Bilinen bir sorun yok! 🎉

Bir sorun bulursan [issue aç](../../issues).

## 📄 Lisans

MIT License - İstediğin gibi kullan, paylaş, değiştir!

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır! Büyük değişiklikler için önce bir issue aç.

## 💝 Teşekkürler

Bu projeyi kullanarak birilerine özel bir teklif sunan herkese teşekkürler!

---

**Made with ❤️ and a lot of ☕**

*Umarım kabul alırsın! 🎉*
