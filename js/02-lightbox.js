import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
  

  
    // Initialize SimpleLightbox
    new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionClass: 'caption',
    });
  });