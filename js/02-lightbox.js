import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

// Create gallery items
const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `
  )
  .join('');

// Render gallery
gallery.innerHTML = galleryMarkup;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionDelay: 250,
});