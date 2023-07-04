import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Create and render gallery markup based on the galleryItems array
const gallery = document.querySelector('.gallery');

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

gallery.innerHTML = galleryMarkup;

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionClass: 'caption',
  closeText: '&times;',
  showCounter: false,
  overlay: true,
  docClose: false,
  nav: true,
  navText: ['&lsaquo;', '&rsaquo;'],
  history: false,
});
