
// Ambil elemen hamburger dan navbar
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Tambahkan kelas active untuk tanda silang
    navMenu.classList.toggle('show'); // Tampilkan atau sembunyikan menu
});

//untuk slider
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'flex' : 'none';
    });

    // Increment index for next slide
    currentIndex = (index + 1) % totalSlides; // Loop back to first slide
}

// Show the first slide initially
showSlide(currentIndex);

// Change slides every 3 seconds
setInterval(() => {
    showSlide(currentIndex);
}, 3000);

//untuk gulir slide
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default anchor

        const targetId = this.getAttribute('href'); // Mendapatkan id target dari href
        const targetElement = document.querySelector(targetId); // Menemukan elemen target

        if (targetElement) {
            // Menghitung jarak gulir
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Gulir halus
            });
        }
    });
});


function searchMenu() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const menuItems = document.querySelectorAll('.menu-item');
  const searchResults = document.getElementById('searchResults');

  // Kosongkan hasil pencarian sebelumnya
  searchResults.innerHTML = '';

  let found = false; // Menandai apakah ada hasil yang ditemukan

  menuItems.forEach(item => {
      const title = item.querySelector('h3').textContent.toLowerCase();
      if (title.includes(input) && input.trim() !== '') {
          found = true; // Menandai bahwa kita menemukan item
          const clonedItem = item.cloneNode(true); // Mengkloning item menu yang ditemukan
          searchResults.appendChild(clonedItem); // Menambahkan ke hasil pencarian
      }
  });

  // Jika tidak ada hasil yang ditemukan
  if (!found && input.trim() !== '') {
      searchResults.innerHTML = '<p>Menu tidak ditemukan.</p>';
  }
}

function showPopup(imageSrc, title, description) {
  const popup = document.getElementById("popup");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupDescription = document.getElementById("popupDescription");

  popupImage.src = imageSrc; // Set gambar pop-up
  popupTitle.textContent = title; // Set judul pop-up
  popupDescription.textContent = description; // Set deskripsi pop-up

  popup.style.display = "flex"; // Tampilkan pop-up
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; // Sembunyikan pop-up
}

// Script Pencarian untuk Makanan
const searchInput = document.getElementById("searchInput");
    const placeholderTexts = ["Soto", "Spaghetti", "Salad", "Pizza", "Nasi Goreng"];



    function typeAnimation() {
        let currentText = placeholderTexts[currentIndex];
        searchInput.placeholder = currentText.substring(0, currentChar);

        if (currentChar < currentText.length) {
            currentChar++;
        } else {
            // Pause for a while before deleting the text
            setTimeout(() => {
                currentChar = 0;
                currentIndex = (currentIndex + 1) % placeholderTexts.length;
            }, 1000);
        }

        setTimeout(typeAnimation, 150); // Speed of typing effect
    }

    typeAnimation();


    
