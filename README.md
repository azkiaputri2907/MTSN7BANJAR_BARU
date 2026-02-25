# Website PKBM Nusa Bangsa - Versi HTML Statis

Website sekolah modern yang dikonversi dari React ke HTML, CSS, dan JavaScript vanilla.

## 📁 Struktur Folder

```
html-version/
├── index.html              # Landing Page
├── buku-tamu.html          # Form Buku Tamu
├── konfirmasi-buku-tamu.html # Konfirmasi Buku Tamu
├── perpustakaan.html       # Perpustakaan Home
├── katalog-kelas.html      # Katalog Paket A/B/C
├── halaman-mapel.html      # Halaman Mata Pelajaran
├── detail-buku.html        # Detail Buku
├── buku-cerita.html        # Koleksi Buku Cerita
├── request-buku.html       # Form Request Buku
├── konfirmasi-request.html # Konfirmasi Request
├── css/
│   └── style.css           # Semua styling
├── js/
│   └── main.js             # Semua JavaScript
└── README.md               # Dokumentasi
```

## 🎨 Fitur Desain

- **Font**: Plus Jakarta Sans dari Google Fonts
- **Warna**: Soft pink, biru muda, dan gold sebagai aksen
- **Border Radius**: Besar (1.5rem - 1.75rem)
- **Shadow**: Lembut dan subtle
- **Animasi**: Hover halus dan fade-in on scroll
- **Responsive**: Mobile-first design

## 🚀 Cara Menggunakan

1. **Langsung Buka File**
   - Buka `index.html` di browser
   - Tidak perlu server atau build tools

2. **Dengan Local Server** (Opsional)
   ```bash
   # Dengan Python 3
   python -m http.server 8000
   
   # Dengan Node.js (npx)
   npx serve
   ```
   Kemudian buka `http://localhost:8000`

## 📄 Halaman-Halaman

### 1. **index.html** - Landing Page
- Hero section dengan background image
- Stats bar (jumlah siswa, buku, guru)
- Struktur organisasi dengan foto staff
- Visi & Misi
- CTA Banner

### 2. **buku-tamu.html** - Form Buku Tamu
- Form dengan validasi
- Input: Nama, Email, Pesan
- Submit ke halaman konfirmasi

### 3. **konfirmasi-buku-tamu.html** - Konfirmasi
- Tampilkan data yang disubmit
- Animasi success
- Tombol kembali ke beranda

### 4. **perpustakaan.html** - Dashboard Perpustakaan
- Sidebar navigasi
- Statistik perpustakaan
- Quick access ke paket
- Buku populer

### 5. **katalog-kelas.html** - Katalog Paket A/B/C
- Grid card paket
- Navigasi ke halaman mapel

### 6. **halaman-mapel.html** - Daftar Mata Pelajaran
- Filter berdasarkan mapel
- Grid buku per mapel
- Link ke detail buku

### 7. **detail-buku.html** - Detail Buku
- Informasi lengkap buku
- Cover buku dengan gradient
- Informasi penulis, tahun, halaman
- Tombol pinjam/baca

### 8. **buku-cerita.html** - Buku Cerita Anak
- Desain playful
- Grid dengan emoji cover
- Filter berdasarkan usia

### 9. **request-buku.html** - Request Buku Baru
- Form request buku
- Input: Nama Buku, Pengarang, Alasan
- Submit ke konfirmasi

### 10. **konfirmasi-request.html** - Konfirmasi Request
- Tampilkan request yang disubmit
- Nomor request otomatis
- Status pending review

## 💻 Teknologi

- **HTML5**: Semantic markup
- **CSS3**: Custom properties (variables), Flexbox, Grid
- **JavaScript ES6**: Vanilla JS, no framework
- **Icons**: Lucide Icons (inline SVG)
- **Images**: Unsplash (real images)

## 🎯 JavaScript Features

- Navbar scroll effect
- Mobile menu toggle
- Smooth scroll untuk anchor links
- Active nav link detection
- Form validation
- SessionStorage untuk data form
- Filter buku berdasarkan mapel
- Fade-in animation on scroll
- Sidebar toggle (perpustakaan)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1023px
- Desktop: ≥ 1024px

## 🎨 Color Palette

```css
/* Primary Colors */
--color-sky-400: #38bdf8
--color-sky-500: #0ea5e9
--color-pink-400: #f472b6
--color-pink-500: #ec4899
--color-amber-400: #fbbf24

/* Neutral Colors */
--color-slate-50: #f8fafc
--color-slate-500: #64748b
--color-slate-800: #1e293b
--color-slate-900: #0f172a
```

## 📝 Catatan Penting

1. **Data Statis**: Semua data (buku, staff) di-hardcode di HTML. Untuk versi dinamis, bisa gunakan JavaScript untuk fetch dari API.

2. **Storage**: Menggunakan `sessionStorage` untuk form data. Data hilang saat browser ditutup. Untuk persistent storage, gunakan `localStorage` atau backend.

3. **Images**: Menggunakan Unsplash. Untuk production, sebaiknya host sendiri.

4. **Validasi**: Form validation hanya di client-side. Untuk production, tambahkan server-side validation.

## 🔄 Perbedaan dengan Versi React

### Yang Sama:
- Desain visual identik
- Semua halaman tersedia
- Fitur form & validasi
- Responsive design
- Animasi hover

### Yang Berbeda:
- Tidak ada routing library (gunakan file terpisah)
- Tidak ada component reusability
- Tidak ada state management library
- Animasi lebih sederhana (CSS instead of Motion)
- Data tidak reactive

## 🚀 Pengembangan Lebih Lanjut

### Untuk menambah fitur dinamis:

1. **Backend Integration**
   ```javascript
   // Contoh fetch API
   fetch('/api/books')
     .then(res => res.json())
     .then(data => renderBooks(data));
   ```

2. **Local Database**
   - Gunakan IndexedDB untuk offline storage
   - Atau localStorage untuk data sederhana

3. **Template Engine**
   - Handlebars.js
   - Mustache.js
   - Untuk rendering dinamis

4. **Build Tools** (Opsional)
   - Webpack untuk bundling
   - Sass untuk CSS preprocessing
   - Babel untuk ES6+ compatibility

## 📞 Kontak

Website: PKBM Nusa Bangsa  
Email: info@pkbmnusabangsa.sch.id  
Telepon: (021) 1234-5678

---

**© 2025 PKBM Nusa Bangsa. Dibuat dengan ♥ untuk pendidikan Indonesia**
