import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

// Create gallery items
const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}" data-description="${description}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `)
  .join('');


gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'a',
  captionType: 'data-description',
});