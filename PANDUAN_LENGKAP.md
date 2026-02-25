# 📖 Panduan Lengkap Konversi Website ke HTML

## ✅ File yang Sudah Dibuat

1. **index.html** ✓ - Landing Page lengkap dengan hero, struktur organisasi, visi misi
2. **buku-tamu.html** ✓ - Form buku tamu dengan validasi
3. **konfirmasi-buku-tamu.html** ✓ - Halaman konfirmasi dengan animasi
4. **css/style.css** ✓ - Semua styling lengkap
5. **js/main.js** ✓ - JavaScript untuk interaktivitas
6. **README.md** ✓ - Dokumentasi
7. **PANDUAN_LENGKAP.md** ✓ - Panduan ini

## 📋 File yang Perlu Dibuat

Anda perlu membuat 7 file berikut mengikuti pola yang sama:

### 1. perpustakaan.html - Dashboard Perpustakaan

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Perpustakaan Online - PKBM Nusa Bangsa</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Copy navbar dari index.html, ganti active link -->
  
  <!-- Main Content dengan Sidebar -->
  <div style="display: flex; min-height: 100vh; padding-top: 5rem;">
    <!-- Sidebar -->
    <aside style="width: 16rem; background: white; border-right: 1px solid var(--color-slate-200); padding: 2rem 1rem; position: fixed; height: calc(100vh - 5rem); overflow-y: auto;">
      <h3 style="font-weight: 700; color: var(--color-slate-800); margin-bottom: 1.5rem; padding: 0 0.75rem;">Menu Perpustakaan</h3>
      <nav>
        <a href="perpustakaan.html" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: var(--radius-xl); background: var(--color-sky-50); color: var(--color-sky-600); font-weight: 600; text-decoration: none; margin-bottom: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Beranda</span>
        </a>
        <a href="katalog-kelas.html" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: var(--radius-xl); color: var(--color-slate-600); text-decoration: none; margin-bottom: 0.5rem; transition: all 0.2s;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <span>Katalog Kelas</span>
        </a>
        <a href="buku-cerita.html" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: var(--radius-xl); color: var(--color-slate-600); text-decoration: none; margin-bottom: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
          <span>Buku Cerita</span>
        </a>
        <a href="request-buku.html" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: var(--radius-xl); color: var(--color-slate-600); text-decoration: none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          <span>Request Buku</span>
        </a>
      </nav>
    </aside>
    
    <!-- Main Content -->
    <main style="margin-left: 16rem; flex: 1; padding: 2rem;">
      <h1 style="font-size: 2rem; font-weight: 700; color: var(--color-slate-800); margin-bottom: 1rem;">Perpustakaan Online</h1>
      <p style="color: var(--color-slate-500); margin-bottom: 2rem;">Jelajahi ribuan koleksi buku untuk mendukung proses belajar Anda</p>
      
      <!-- Stats Grid -->
      <div class="grid grid-2-sm" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
        <div class="card" style="padding: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-xl); background: var(--color-sky-50); display: flex; align-items: center; justify-content: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-sky-500);"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <div>
              <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--color-slate-800); margin: 0;">1.247</h3>
              <p style="font-size: 0.875rem; color: var(--color-slate-500); margin: 0;">Total Buku</p>
            </div>
          </div>
        </div>
        <!-- Tambahkan stats lainnya -->
      </div>
      
      <!-- Paket Cards -->
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--color-slate-800); margin-bottom: 1.5rem;">Pilih Paket</h2>
      <div class="grid grid-3-lg" style="gap: 1.5rem;">
        <!-- Paket A Card -->
        <a href="katalog-kelas.html?paket=a" class="card" style="text-decoration: none; cursor: pointer;">
          <div style="height: 8rem; background: linear-gradient(135deg, var(--color-sky-400), var(--color-blue-500)); padding: 1.5rem; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 3rem;">🎒</span>
          </div>
          <div style="padding: 1.5rem;">
            <h3 style="font-weight: 700; color: var(--color-slate-800); margin-bottom: 0.25rem;">Paket A</h3>
            <p style="color: var(--color-sky-500); font-size: 0.875rem; margin-bottom: 0.5rem;">Setara SD</p>
            <p style="color: var(--color-slate-500); font-size: 0.875rem; margin-bottom: 1rem;">Koleksi buku untuk jenjang Sekolah Dasar kelas 1-6</p>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: var(--color-slate-400);">156 Buku</span>
              <span style="color: var(--color-sky-500);">→</span>
            </div>
          </div>
        </a>
        <!-- Tambahkan Paket B dan C dengan pola yang sama -->
      </div>
    </main>
  </div>
  
  <!-- Copy footer dari index.html -->
  
  <script src="js/main.js"></script>
</body>
</html>
```

### 2. katalog-kelas.html - Katalog Paket

**Template Struktur:**
- Sidebar yang sama
- Grid 3 kolom untuk Paket A, B, C
- Setiap card menuju ke halaman-mapel.html dengan parameter paket

### 3. halaman-mapel.html - Halaman Mata Pelajaran

**Fitur:**
- Filter button untuk setiap mapel
- Grid buku dengan data-mapel attribute
- JavaScript filterBooks() untuk filter
- Setiap buku link ke detail-buku.html?id=xxx

**Contoh Data Buku (inline HTML):**
```html
<div class="book-item" data-mapel="matematika" style="display: none;">
  <a href="detail-buku.html?id=b001" class="card">
    <div style="padding: 2rem; background: linear-gradient(135deg, var(--color-purple-400), var(--color-violet-300)); text-align: center;">
      <span style="font-size: 3rem;">🔢</span>
    </div>
    <div style="padding: 1.25rem;">
      <h3>Matematika Kelas 1 SD</h3>
      <p style="color: var(--color-slate-500); font-size: 0.875rem;">Tim Kemdikbud</p>
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
        <span style="background: var(--color-purple-50); color: var(--color-purple-600); padding: 0.25rem 0.5rem; border-radius: 0.5rem; font-size: 0.75rem;">160 hal</span>
        <span style="color: var(--color-slate-400); font-size: 0.75rem;">2023</span>
      </div>
    </div>
  </a>
</div>
```

### 4. detail-buku.html - Detail Buku

**JavaScript untuk load data:**
```javascript
// Tambahkan di main.js
const booksData = {
  'b001': {
    title: 'Matematika Kelas 1 SD',
    author: 'Tim Kemdikbud',
    pages: 160,
    year: 2023,
    emoji: '🔢',
    color: 'var(--color-purple-400)',
    description: 'Pengenalan konsep matematika dasar untuk kelas 1 SD.',
    publisher: 'Kemdikbud',
    edition: 'Edisi Revisi 2023'
  },
  // ... data buku lainnya
};

// Load detail based on URL parameter
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get('id');
if (bookId && booksData[bookId]) {
  const book = booksData[bookId];
  document.getElementById('bookTitle').textContent = book.title;
  // ... set data lainnya
}
```

### 5. buku-cerita.html - Buku Cerita Anak

**Desain:**
- Grid 3-4 kolom kartu buku cerita
- Emoji besar sebagai cover
- Filter berdasarkan usia (5-8, 6-10, 8-12 tahun)
- Warna playful (pink, kuning, biru muda)

**Contoh Card:**
```html
<div class="card" data-age="5-8" style="cursor: pointer;">
  <div style="padding: 3rem; background: linear-gradient(135deg, var(--color-green-400), var(--color-emerald-300)); text-align: center;">
    <span style="font-size: 4rem;">🦊</span>
  </div>
  <div style="padding: 1.25rem;">
    <span style="background: var(--color-green-50); color: var(--color-green-600); padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem;">5-8 tahun</span>
    <h3 style="margin-top: 0.75rem;">Si Kancil dan Buaya</h3>
    <p style="color: var(--color-slate-500); font-size: 0.875rem;">Tim Nusantara</p>
    <p style="color: var(--color-slate-600); font-size: 0.875rem; margin-top: 0.5rem; line-height: 1.5;">Kisah klasik si kancil yang cerdik...</p>
    <div style="margin-top: 0.75rem;">
      <span style="color: var(--color-slate-400); font-size: 0.75rem;">📄 48 halaman</span>
    </div>
  </div>
</div>
```

### 6. request-buku.html - Form Request

**Form Fields:**
- Nama Buku (required)
- Pengarang (required)
- Kategori (select: Paket A/B/C)
- Alasan Request (textarea, required)

**Submit ke konfirmasi-request.html**

### 7. konfirmasi-request.html - Konfirmasi Request

**Mirip dengan konfirmasi-buku-tamu.html:**
- Success animation
- Display data request
- Nomor request (random generated)
- Status: "Menunggu Review"
- Tombol kembali ke perpustakaan

## 🎨 Komponen yang Bisa Digunakan Ulang

### Navbar HTML (Copy Paste untuk Semua Halaman)
```html
<nav class="navbar" id="navbar">
  <!-- ... sama untuk semua halaman, ganti active link saja -->
</nav>
```

### Footer HTML (Copy Paste untuk Semua Halaman)
```html
<footer class="footer">
  <!-- ... sama untuk semua halaman -->
</footer>
```

### Card Template
```html
<div class="card">
  <div class="card-image">
    <img src="..." alt="...">
  </div>
  <div class="card-content">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```

### Button Styles
```html
<!-- Primary -->
<button class="btn btn-primary">
  <svg>...</svg>
  Text
</button>

<!-- Secondary -->
<button class="btn btn-secondary">
  Text
</button>

<!-- White -->
<button class="btn btn-white">
  Text
</button>
```

## 📊 Data Mock untuk JavaScript

Tambahkan di `js/main.js`:

```javascript
// Books Data
const booksData = {
  'b001': { title: 'Matematika Kelas 1 SD', ... },
  'b002': { title: 'Bahasa Indonesia Kelas 1 SD', ... },
  // ... sampai b025
};

// Story Books Data
const storyBooks = [
  { id: 's001', title: 'Si Kancil dan Buaya', ageGroup: '5-8 tahun', ... },
  // ... sampai s012
];

// Subjects by Paket
const subjectsByPaket = {
  'paket-a': [
    { id: 'matematika', name: 'Matematika', emoji: '🔢', color: 'purple' },
    { id: 'bahasa-indonesia', name: 'Bahasa Indonesia', emoji: '📖', color: 'blue' },
    // ... 8 mapel
  ],
  'paket-b': [ ... ],
  'paket-c': [ ... ]
};
```

## 🚀 Langkah-Langkah Menyelesaikan

1. **Buat perpustakaan.html**
   - Copy navbar dan footer dari index.html
   - Tambahkan sidebar
   - Buat stats cards dan paket cards

2. **Buat katalog-kelas.html**
   - Sama dengan perpustakaan.html tapi hanya menampilkan 3 paket besar

3. **Buat halaman-mapel.html**
   - Tambahkan filter buttons di atas
   - Buat grid buku dengan data-mapel
   - Implementasi filterBooks() dari main.js

4. **Buat detail-buku.html**
   - Layout 2 kolom (cover + detail)
   - Load data dari URL parameter
   - Tombol "Pinjam" dan "Baca Online"

5. **Buat buku-cerita.html**
   - Grid playful dengan emoji besar
   - Filter berdasarkan usia
   - Desain lebih colorful

6. **Buat request-buku.html**
   - Form sederhana
   - Validasi
   - Submit ke konfirmasi

7. **Buat konfirmasi-request.html**
   - Copy pola dari konfirmasi-buku-tamu.html
   - Ganti konten untuk request buku

## 💡 Tips

1. **Konsistensi**: Gunakan warna, spacing, dan border-radius yang sama
2. **Responsive**: Test di mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
3. **Icons**: Gunakan Lucide icons (inline SVG)
4. **Images**: Gunakan Unsplash atau placeholder
5. **Data**: Hardcode dulu, nanti bisa diganti dengan API

## ✨ Enhacement Opsional

- [ ] Tambahkan loading spinner
- [ ] Tambahkan search functionality
- [ ] Pagination untuk buku
- [ ] Dark mode toggle
- [ ] Print CSS untuk buku
- [ ] PWA (Service Worker)
- [ ] Lazy loading images

## 📞 Support

Jika ada pertanyaan tentang implementasi, silakan merujuk ke:
- **index.html** untuk struktur halaman lengkap
- **style.css** untuk semua class yang tersedia
- **main.js** untuk semua function yang bisa digunakan

---

**Happy Coding! 🚀**
