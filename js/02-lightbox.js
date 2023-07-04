import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
  
    // Render gallery items
    galleryItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('gallery__item');
  
      const link = document.createElement('a');
      link.classList.add('gallery__link');
      link.href = item.original;
  
      const image = document.createElement('img');
      image.classList.add('gallery__image');
      image.src = item.preview;
      image.alt = item.description;
  
      link.appendChild(image);
      listItem.appendChild(link);
      gallery.appendChild(listItem);
    });
  
    // Initialize SimpleLightbox
    new SimpleLightbox('.gallery a', {
      captions: true,
      captionDelay: 250,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionClass: 'caption',
    });
  });