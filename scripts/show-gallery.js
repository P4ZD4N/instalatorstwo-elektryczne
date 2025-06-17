let currentImageIndex = 0;
let galleryImages = [];

function showGallery(projectData) {
  galleryImages = projectData.images;
  currentImageIndex = 0;

  document.getElementById("project-overlay").style.display = "flex";
  document.getElementById("project-overlay").style.flexDirection = "column";
  document.getElementById("project-overlay-image").src = galleryImages[currentImageIndex];
  document.getElementById("project-title").innerText = projectData.title;
}

function nextImage() {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  document.getElementById("project-overlay-image").src = galleryImages[currentImageIndex];
}

function prevImage() {
  if (galleryImages.length === 0) return;
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById("project-overlay-image").src = galleryImages[currentImageIndex];
}

function closeImage() {
  const overlay = document.getElementById('project-overlay');
  overlay.classList.remove('fade-in');
  overlay.classList.add('fade-out');

  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('fade-out');
  }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('project-overlay');
  const overlayContent = document.querySelector('.project-overlay-content');
  
  overlay.addEventListener('click', function(e) {
    if (!overlayContent.contains(e.target)) {
      closeImage();
    }
  });
  
  overlayContent.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});