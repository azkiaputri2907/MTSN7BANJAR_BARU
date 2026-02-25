// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('open');
  }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
        }
      }
    });
  });
});

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-link, .mobile-menu-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath.includes(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });
});

// Simple fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Form validation for Buku Tamu
function validateBukuTamuForm(event) {
  event.preventDefault();
  
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  
  if (!nama || !email || !pesan) {
    alert('Mohon lengkapi semua field!');
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Format email tidak valid!');
    return false;
  }
  
  // Store data in sessionStorage
  sessionStorage.setItem('bukuTamuData', JSON.stringify({
    nama: nama,
    email: email,
    pesan: pesan,
    timestamp: new Date().toISOString()
  }));
  
  // Redirect to confirmation page
  window.location.href = 'konfirmasi-buku-tamu.html';
  return false;
}

// Load Buku Tamu confirmation data
document.addEventListener('DOMContentLoaded', function() {
  const confirmationPage = document.getElementById('confirmationPage');
  if (confirmationPage) {
    const data = sessionStorage.getItem('bukuTamuData');
    if (data) {
      const bukuTamuData = JSON.parse(data);
      document.getElementById('confirmNama').textContent = bukuTamuData.nama;
      document.getElementById('confirmEmail').textContent = bukuTamuData.email;
      document.getElementById('confirmPesan').textContent = bukuTamuData.pesan;
      
      const date = new Date(bukuTamuData.timestamp);
      document.getElementById('confirmWaktu').textContent = date.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } else {
      // Redirect back if no data
      window.location.href = 'buku-tamu.html';
    }
  }
});

// Filter books by subject (for perpustakaan)
function filterBooks(mapelId) {
  const allBooks = document.querySelectorAll('.book-item');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  filterButtons.forEach(btn => {
    if (btn.dataset.mapel === mapelId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Filter books
  allBooks.forEach(book => {
    if (mapelId === 'semua' || book.dataset.mapel === mapelId) {
      book.style.display = 'block';
      setTimeout(() => {
        book.style.opacity = '1';
        book.style.transform = 'scale(1)';
      }, 10);
    } else {
      book.style.opacity = '0';
      book.style.transform = 'scale(0.95)';
      setTimeout(() => {
        book.style.display = 'none';
      }, 300);
    }
  });
}

// Request Buku form validation
function validateRequestForm(event) {
  event.preventDefault();
  
  const namaBuku = document.getElementById('namaBuku').value.trim();
  const pengarang = document.getElementById('pengarang').value.trim();
  const alasan = document.getElementById('alasan').value.trim();
  
  if (!namaBuku || !pengarang || !alasan) {
    alert('Mohon lengkapi semua field!');
    return false;
  }
  
  // Store data in sessionStorage
  sessionStorage.setItem('requestBukuData', JSON.stringify({
    namaBuku: namaBuku,
    pengarang: pengarang,
    alasan: alasan,
    timestamp: new Date().toISOString()
  }));
  
  // Redirect to confirmation page
  window.location.href = 'konfirmasi-request.html';
  return false;
}

// Load Request Buku confirmation data
document.addEventListener('DOMContentLoaded', function() {
  const requestConfirmPage = document.getElementById('requestConfirmPage');
  if (requestConfirmPage) {
    const data = sessionStorage.getItem('requestBukuData');
    if (data) {
      const requestData = JSON.parse(data);
      document.getElementById('confirmNamaBuku').textContent = requestData.namaBuku;
      document.getElementById('confirmPengarang').textContent = requestData.pengarang;
      document.getElementById('confirmAlasan').textContent = requestData.alasan;
      
      const date = new Date(requestData.timestamp);
      document.getElementById('confirmRequestWaktu').textContent = date.toLocaleString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } else {
      // Redirect back if no data
      window.location.href = 'request-buku.html';
    }
  }
});

// Sidebar toggle for library layout
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('open');
  }
}

// Close sidebar when clicking outside (mobile)
document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  
  if (sidebar && sidebar.classList.contains('open')) {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
      sidebar.classList.remove('open');
    }
  }
});

